"use client";

import { useState } from "react";
import Image from "next/image";
import { FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-xl shadow-lg">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="Neha Makeover"
            width={60}
            height={60}
            className="rounded-full"
          />

          <div>
            <h1 className="text-2xl font-bold text-pink-600">
              Neha Makeover
            </h1>
            <p className="text-xs text-gray-500">
              Beauty Salon & Bridal Studio
            </p>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-semibold">
          <a href="#home" className="hover:text-pink-600">Home</a>
          <a href="#about" className="hover:text-pink-600">About</a>
          <a href="#services" className="hover:text-pink-600">Services</a>
          <a href="#gallery" className="hover:text-pink-600">Gallery</a>
          <a href="#contact" className="hover:text-pink-600">Contact</a>

          <a
            href="https://wa.me/918700920394"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-full"
          >
            <FaWhatsapp />
            WhatsApp
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg px-6 py-5 space-y-4">

          <a href="#home" onClick={() => setMenuOpen(false)} className="block">Home</a>
          <a href="#about" onClick={() => setMenuOpen(false)} className="block">About</a>
          <a href="#services" onClick={() => setMenuOpen(false)} className="block">Services</a>
          <a href="#gallery" onClick={() => setMenuOpen(false)} className="block">Gallery</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="block">Contact</a>

          <a
            href="https://wa.me/918700920394"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 text-white px-5 py-3 rounded-full"
          >
            <FaWhatsapp />
            WhatsApp
          </a>

        </div>
      )}
    </nav>
  );
}