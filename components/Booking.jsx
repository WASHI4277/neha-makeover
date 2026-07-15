"use client";

import { useState } from "react";

export default function Booking() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const bookNow = () => {
    const message = `🌸 *Neha Makeover Appointment* 🌸

Name: ${form.name}
Phone: ${form.phone}
Service: ${form.service}
Date: ${form.date}
Time: ${form.time}`;

    const url = `https://wa.me/918700920394?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="py-24 bg-pink-50" id="booking">
      <div className="max-w-4xl mx-auto px-6">

        <div className="text-center mb-10">
          <p className="uppercase tracking-[5px] text-pink-500">
            Book Appointment
          </p>

          <h2 className="text-5xl font-bold mt-3">
            Schedule Your Visit
          </h2>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-10 space-y-6">

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            onChange={handleChange}
            className="w-full border rounded-xl p-4"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
            className="w-full border rounded-xl p-4"
          />

          <select
            name="service"
            onChange={handleChange}
            className="w-full border rounded-xl p-4"
          >
            <option value="">Select Service</option>
            <option>Bridal Makeup</option>
            <option>Hair Spa</option>
            <option>Hair Smoothing</option>
            <option>Facial</option>
            <option>D-Tan</option>
            <option>Manicure & Pedicure</option>
          </select>

          <input
            type="date"
            name="date"
            onChange={handleChange}
            className="w-full border rounded-xl p-4"
          />

          <input
            type="time"
            name="time"
            onChange={handleChange}
            className="w-full border rounded-xl p-4"
          />

          <button
            onClick={bookNow}
            className="w-full bg-pink-600 hover:bg-pink-700 text-white py-4 rounded-xl text-lg font-semibold transition"
          >
            Book on WhatsApp
          </button>

        </div>

      </div>
    </section>
  );
}