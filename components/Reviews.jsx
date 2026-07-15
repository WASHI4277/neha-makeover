"use client";

import { FaStar } from "react-icons/fa";

const reviews = [
  {
    name: "Priya Singh",
    review:
      "Amazing bridal makeup. I loved the look and everyone appreciated it.",
  },
  {
    name: "Anjali Verma",
    review:
      "Best beauty salon in Deoria. Staff is very friendly and professional.",
  },
  {
    name: "Riya Sharma",
    review:
      "Hair Spa and Facial services are excellent. Highly recommended!",
  },
];

export default function Reviews() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <p className="text-pink-500 uppercase tracking-[5px]">
            Testimonials
          </p>

          <h2 className="text-5xl font-bold mt-3">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {reviews.map((item, index) => (
            <div
              key={index}
              className="bg-pink-50 rounded-3xl shadow-lg p-8"
            >
              <div className="flex text-yellow-500 mb-5">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <p className="text-gray-600 leading-7">
                "{item.review}"
              </p>

              <h3 className="mt-6 text-xl font-bold text-pink-600">
                {item.name}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}