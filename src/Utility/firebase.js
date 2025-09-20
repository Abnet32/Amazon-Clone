// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// Auth
import { getAuth } from "firebase/auth";
import 'firebase/compat/firestore';
import "firebase/compat/auth";

// Firestore
const firebaseConfig = {
  apiKey: "AIzaSyDI-_M0hKTKp2izgUIkcKjbrR5KckEONhc",
  authDomain: "clone-fa0b6.firebaseapp.com",
  projectId: "clone-fa0b6",
  storageBucket: "clone-fa0b6.firebasestorage.app",
  messagingSenderId: "401897006760",
  appId: "1:401897006760:web:84054a7eaecb6fee4b849d",
  measurementId: "G-F0Q65Q435X",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
export default app;