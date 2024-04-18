// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-6f647.firebaseapp.com",
  projectId: "mern-6f647",
  storageBucket: "mern-6f647.appspot.com",
  messagingSenderId: "282440995970",
  appId: "1:282440995970:web:80127da9d4986fb234d09b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);