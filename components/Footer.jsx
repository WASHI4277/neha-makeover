import { FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-14">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

        <div>
          <h2 className="text-3xl font-bold text-pink-500">
            Neha Makeover
          </h2>

          <p className="mt-4 text-gray-300">
            Luxury Beauty Salon & Bridal Studio
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">
            Contact
          </h3>

          <p className="flex items-center gap-3">
            <FaPhoneAlt />
            +91 8700920394
          </p>

          <p className="flex items-start gap-3 mt-4">
            <FaMapMarkerAlt />
            Deoria, Uttar Pradesh
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">
            Book Appointment
          </h3>

          <a
            href="https://wa.me/918700920394"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 px-6 py-3 rounded-full"
          >
            <FaWhatsapp />
            WhatsApp
          </a>
        </div>

      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400">
        © 2026 Neha Makeover. All Rights Reserved.
      </div>
    </footer>
  );
}