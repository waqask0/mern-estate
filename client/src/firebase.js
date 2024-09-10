// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-c8729.firebaseapp.com",
  projectId: "mern-estate-c8729",
  storageBucket: "mern-estate-c8729.appspot.com",
  messagingSenderId: "777737053837",
  appId: "1:777737053837:web:506b9209a0014f2775e4c4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);