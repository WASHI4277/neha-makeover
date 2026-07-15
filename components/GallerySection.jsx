"use client";

import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import {
  collection,
  getDocs,
  query,
  orderBy,
} from "firebase/firestore";

export default function GallerySection() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    loadImages();
  }, []);

  async function loadImages() {
    try {
      const q = query(
        collection(db, "gallery"),
        orderBy("createdAt", "desc")
      );

      const snapshot = await getDocs(q);

      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setImages(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section
      id="gallery"
      className="py-24 bg-gradient-to-b from-pink-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <p className="uppercase tracking-[6px] text-pink-500 font-semibold">
            Our Portfolio
          </p>

          <h2 className="text-5xl md:text-6xl font-bold text-pink-600 mt-3">
            Beauty Gallery
          </h2>

          <p className="text-gray-500 text-lg mt-5 max-w-2xl mx-auto">
            Every makeover tells a story.
            Explore our bridal transformations,
            party makeup, hair styling and salon services.
          </p>

        </div>

        {/* Masonry Gallery */}

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">

          {images.map((item) => (

            <div
              key={item.id}
              className="break-inside-avoid rounded-3xl overflow-hidden shadow-xl bg-white hover:shadow-2xl transition duration-500"
            >

              <img
                src={item.image}
                alt={item.title}
                className="w-full h-auto hover:scale-105 transition duration-500"
              />

              <div className="p-5">

                <h3 className="text-2xl font-bold text-gray-800">
                  {item.title}
                </h3>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}