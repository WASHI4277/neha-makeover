"use client";

export default function GalleryPage() {

  return (

    <div className="min-h-screen bg-pink-50">

      <div className="bg-pink-600 text-white text-3xl font-bold p-6">
        Gallery Management
      </div>

      <div className="max-w-5xl mx-auto mt-10 bg-white p-8 rounded-xl shadow">

        <h2 className="text-2xl font-bold mb-6">
          Upload New Image
        </h2>

        <input
          type="file"
          className="border p-3 rounded w-full"
        />

        <button
          className="mt-6 bg-pink-600 text-white px-8 py-3 rounded-lg"
        >
          Upload Image
        </button>

      </div>

    </div>

  );
}