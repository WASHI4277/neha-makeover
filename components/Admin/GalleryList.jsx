"use client";

import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  orderBy,
  query,
} from "firebase/firestore";

export default function GalleryList() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    loadImages();
  }, []);

  async function loadImages() {
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
  }

  async function deleteImage(id) {
    if (!confirm("Delete this image?")) return;

    await deleteDoc(doc(db, "gallery", id));

    loadImages();
  }

  return (
    <div className="mt-10">

      <h2 className="text-3xl font-bold mb-6">
        Gallery Images
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        {images.map((item) => (

          <div
            key={item.id}
            className="bg-white rounded-xl shadow overflow-hidden"
          >

            <img
              src={item.image}
              className="h-60 w-full object-cover"
            />

            <div className="p-4">

              <h3 className="font-bold mb-3">
                {item.title}
              </h3>

              <button
                onClick={() => deleteImage(item.id)}
                className="bg-red-600 text-white px-5 py-2 rounded"
              >
                Delete
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}