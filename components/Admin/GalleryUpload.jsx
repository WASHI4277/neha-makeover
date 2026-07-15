"use client";

import { useState } from "react";
import axios from "axios";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { CLOUD_NAME, UPLOAD_PRESET } from "@/lib/cloudinary";

export default function GalleryUpload() {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);

  const uploadImage = async () => {
    if (!image) {
      alert("Please select an image");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("file", image);
      formData.append("upload_preset", UPLOAD_PRESET);

      const res = await axios.post(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
        formData
      );

      const imageUrl = res.data.secure_url;

      await addDoc(collection(db, "gallery"), {
        title,
        image: imageUrl,
        createdAt: serverTimestamp(),
      });

      alert("Image Uploaded Successfully!");

      setTitle("");
      setImage(null);

      document.getElementById("imageInput").value = "";
    } catch (err) {
      console.error(err);
      alert("Upload Failed");
    }

    setLoading(false);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow mt-8">
      <h2 className="text-2xl font-bold mb-5 text-pink-600">
        Upload Gallery Image
      </h2>

      <input
        type="text"
        placeholder="Image Title"
        className="border p-3 rounded w-full mb-4"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        id="imageInput"
        type="file"
        className="mb-4"
        onChange={(e) => setImage(e.target.files[0])}
      />

      <button
        onClick={uploadImage}
        disabled={loading}
        className="bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700"
      >
        {loading ? "Uploading..." : "Upload Image"}
      </button>
    </div>
  );
}