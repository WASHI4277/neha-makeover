import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCn2xDCk3ndbL8xj4WkUQycFJHl52rtFzc",
  authDomain: "neha-makeover.firebaseapp.com",
  projectId: "neha-makeover",
  storageBucket: "neha-makeover.firebasestorage.app",
  messagingSenderId: "865509641812",
  appId: "1:865509641812:web:a3a6e95b391c4eaad4a7c1",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);