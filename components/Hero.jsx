"use client";

import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        backgroundImage: "url('/images/hero.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="relative min-h-screen py-28 flex items-center justify-center overflow-hidden"
    >
      {/* Overlay */}

      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/70"></div>

      {/* Hero Content */}

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center px-6 max-w-5xl"
      >
        <p className="uppercase tracking-[8px] text-pink-300 mb-5">
          Luxury Beauty Salon
        </p>

        <h1 className="text-white text-5xl md:text-7xl font-black">
          Neha <span className="text-pink-500">Makeover</span>
        </h1>

        <h2 className="text-white text-2xl md:text-4xl font-semibold mt-6">
          Enhance Your Beauty
          <br />
          Boost Your Confidence
        </h2>

        <p className="text-gray-300 mt-8 text-lg max-w-3xl mx-auto leading-8">
          Bridal Makeup • Hair Spa • Hair Smoothing • Facial • D-Tan •
          Manicure & Pedicure
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-5">

          <a
            href="https://wa.me/918700920394"
            className="bg-pink-600 hover:bg-pink-700 px-8 py-4 rounded-full text-white font-semibold shadow-xl transition"
          >
            Book Appointment
          </a>

          <a
            href="#services"
            className="border border-white text-white px-8 py-4 rounded-full backdrop-blur-md hover:bg-white hover:text-black transition"
          >
            View Services
          </a>

        </div>

        {/* Stats */}

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">

          <div className="backdrop-blur-md bg-white/10 rounded-2xl p-6 border border-white/20">
            <h3 className="text-pink-400 text-4xl font-bold">
              500+
            </h3>

            <p className="text-white mt-2">
              Happy Clients
            </p>
          </div>

          <div className="backdrop-blur-md bg-white/10 rounded-2xl p-6 border border-white/20">
            <h3 className="text-pink-400 text-4xl font-bold">
              5★
            </h3>

            <p className="text-white mt-2">
              Customer Rating
            </p>
          </div>

          <div className="backdrop-blur-md bg-white/10 rounded-2xl p-6 border border-white/20">
            <h3 className="text-pink-400 text-4xl font-bold">
              7+
            </h3>

            <p className="text-white mt-2">
              Beauty Services
            </p>
          </div>

        </div>

      </motion.div>

      {/* Scroll */}

      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-8 text-white text-center"
      >

        <FaArrowDown className="mx-auto text-2xl" />

        <p className="mt-2 text-sm">
          Scroll Down
        </p>

      </motion.div>

    </section>
  );
}