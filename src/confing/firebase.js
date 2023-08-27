// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaU5GaQVqGMmeyCbrkami1RHYq_wFQZzI",
  authDomain: "contact-app-7788b.firebaseapp.com",
  projectId: "contact-app-7788b",
  storageBucket: "contact-app-7788b.appspot.com",
  messagingSenderId: "741715374145",
  appId: "1:741715374145:web:ce30220c353759161f96c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)