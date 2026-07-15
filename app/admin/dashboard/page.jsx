"use client";

import GalleryUpload from "@/components/Admin/GalleryUpload";
import GalleryList from "@/components/Admin/GalleryList";
import Link from "next/link";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/admin/login");
  };

  const cards = [
    {
      title: "📸 Gallery",
      link: "/admin/gallery",
      color: "bg-pink-500",
    },
    {
      title: "⭐ Reviews",
      link: "/admin/reviews",
      color: "bg-yellow-500",
    },
    {
      title: "💄 Services",
      link: "/admin/services",
      color: "bg-purple-500",
    },
    {
      title: "📅 Bookings",
      link: "/admin/bookings",
      color: "bg-blue-500",
    },
  ];

  return (
    <div className="min-h-screen bg-pink-50">

      {/* Header */}
      <div className="bg-pink-600 text-white px-8 py-6 flex justify-between items-center">

        <h1 className="text-3xl font-bold">
          Neha Makeover Admin
        </h1>

        <button
          onClick={handleLogout}
          className="bg-white text-pink-600 px-5 py-2 rounded-lg font-semibold hover:bg-pink-100"
        >
          Logout
        </button>

      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto p-10">

        <GalleryUpload />

        <GalleryList />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {cards.map((card, index) => (
            <Link key={index} href={card.link}>

              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition cursor-pointer p-8">

                <div
                  className={`${card.color} w-16 h-16 rounded-full flex items-center justify-center text-white text-3xl mb-6`}
                >
                  {card.title.split(" ")[0]}
                </div>

                <h2 className="text-2xl font-bold">
                  {card.title.substring(2)}
                </h2>

                <p className="text-gray-500 mt-2">
                  Manage {card.title.substring(2)}
                </p>

              </div>

            </Link>
          ))}

        </div>

      </div>

    </div>
  );
}