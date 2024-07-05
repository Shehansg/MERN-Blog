// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-dd428.firebaseapp.com",
  projectId: "mern-blog-dd428",
  storageBucket: "mern-blog-dd428.appspot.com",
  messagingSenderId: "46194833641",
  appId: "1:46194833641:web:e04d13441214db8b045878"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);