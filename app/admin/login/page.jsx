"use client";

import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const login = async () => {
    setLoading(true);
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);

      router.push("/admin/dashboard");
    } catch (err) {
      setError("Invalid Email or Password");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-50">

      <div className="bg-white p-10 rounded-2xl shadow-xl w-[400px]">

        <h1 className="text-4xl font-bold text-center text-pink-600 mb-8">
          Admin Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          className="w-full border p-3 rounded-lg mb-4"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          className="w-full border p-3 rounded-lg mb-4"
        />

        {error && (
          <p className="text-red-500 mb-4">
            {error}
          </p>
        )}

        <button
          onClick={login}
          disabled={loading}
          className="w-full bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

      </div>

    </div>
  );
}