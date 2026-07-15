"use client";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
  FaClock,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-pink-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-pink-500 uppercase tracking-[5px] font-semibold">
            Contact Us
          </p>

          <h2 className="text-5xl font-bold mt-3">
            Get In Touch
          </h2>

          <p className="text-gray-500 mt-4">
            Book your appointment today and experience premium beauty services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Left Side */}
          <div className="bg-white rounded-3xl shadow-xl p-10">

            {/* Address */}
            <div className="flex gap-5 mb-8">
              <FaMapMarkerAlt className="text-pink-600 text-3xl mt-1" />

              <div>
                <h3 className="font-bold text-xl">Address</h3>

                <p className="text-gray-600 mt-2 leading-7">
                  Bhikhampur Road,
                  <br />
                  Near Chakiya Dhala,
                  <br />
                  Tara Bhawan Gali,
                  <br />
                  Ambedkar Nagar,
                  <br />
                  Deoria, Uttar Pradesh – 274001
                </p>

                <a
                  href="https://www.google.com/maps/place/Neha+Makeover/@26.4974784,83.7952452,17z/data=!3m1!4b1!4m6!3m5!1s0x3993c53d60503079:0x6b4f6207425ea31d!8m2!3d26.4974736!4d83.7978201!16s%2Fg%2F11nr4fvb_3?entry=ttu&g_ep=EgoyMDI2MDcxMy4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-5 bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full transition"
                >
                  📍 Get Directions
                </a>

              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-5 mb-8">
              <FaPhoneAlt className="text-pink-600 text-2xl mt-1" />

              <div>
                <h3 className="font-bold text-xl">
                  Phone
                </h3>

                <a
                  href="tel:+918700920394"
                  className="text-gray-600 mt-2 block hover:text-pink-600"
                >
                  +91 8700920394
                </a>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="flex gap-5 mb-8">
              <FaClock className="text-pink-600 text-2xl mt-1" />

              <div>
                <h3 className="font-bold text-xl">
                  Opening Hours
                </h3>

                <p className="text-gray-600 mt-2">
                  Monday – Sunday
                  <br />
                  9:00 AM – 7:00 PM
                </p>
              </div>
            </div>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/918700920394"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-7 py-4 rounded-full transition shadow-lg"
            >
              <FaWhatsapp size={22} />
              Chat on WhatsApp
            </a>

          </div>

          {/* Right Side */}
          <div className="bg-white rounded-3xl shadow-xl p-10">

            <h3 className="text-3xl font-bold mb-8">
              Send Message
            </h3>

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full border rounded-xl p-4 outline-none focus:border-pink-500"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full border rounded-xl p-4 outline-none focus:border-pink-500"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border rounded-xl p-4 outline-none focus:border-pink-500"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full border rounded-xl p-4 outline-none focus:border-pink-500"
              ></textarea>

              <button
                type="submit"
                className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 rounded-full transition"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}