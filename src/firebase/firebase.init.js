// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3NhPnd6mGpErDTvFKKoy_56tC-3f_CxE",
  authDomain: "bookshelf-project-d43ac.firebaseapp.com",
  projectId: "bookshelf-project-d43ac",
  storageBucket: "bookshelf-project-d43ac.firebasestorage.app",
  messagingSenderId: "716340608458",
  appId: "1:716340608458:web:42a2191dbb42f4b4aea333"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
