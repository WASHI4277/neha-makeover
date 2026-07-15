"use client";

import { motion } from "framer-motion";
import {
  FaGem,
  FaCut,
  FaSpa,
  FaSmile,
  FaHandSparkles,
  FaMagic,
} from "react-icons/fa";

const services = [
  {
    title: "Bridal Makeup",
    icon: <FaGem size={40} />,
    desc: "Luxury bridal makeup for your special day.",
  },
  {
    title: "Hair Smoothing",
    icon: <FaCut size={40} />,
    desc: "Silky smooth & shiny hair treatment.",
  },
  {
    title: "Hair Spa",
    icon: <FaSpa size={40} />,
    desc: "Healthy, nourished and beautiful hair.",
  },
  {
    title: "Facial",
    icon: <FaSmile size={40} />,
    desc: "Glowing skin with premium facial care.",
  },
  {
    title: "D-Tan",
    icon: <FaMagic size={40} />,
    desc: "Instant tan removal & skin brightening.",
  },
  {
    title: "Manicure & Pedicure",
    icon: <FaHandSparkles size={40} />,
    desc: "Complete hand & foot beauty treatment.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 bg-gradient-to-b from-pink-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <p className="text-pink-500 uppercase tracking-[5px] font-semibold">
            Our Services
          </p>

          <h2 className="text-5xl font-bold mt-3">
            Beauty Services We Offer
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Premium salon services with professional care and quality products.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {services.map((item, index) => (

            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl shadow-xl p-8 text-center border border-pink-100 hover:border-pink-400"
            >

              <div className="text-pink-500 flex justify-center mb-6">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold">
                {item.title}
              </h3>

              <p className="text-gray-500 mt-4">
                {item.desc}
              </p>

              <a
                href="https://wa.me/918700920394"
                target="_blank"
                className="inline-block mt-8 bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full transition"
              >
                Book Now
              </a>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}