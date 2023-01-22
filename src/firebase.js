// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsc4ZHGiPjv3Hj7yyRN1qZZ6j_xLfD0Vk",
  authDomain: "loginsalespage.firebaseapp.com",
  projectId: "loginsalespage",
  storageBucket: "loginsalespage.appspot.com",
  messagingSenderId: "883605257045",
  appId: "1:883605257045:web:f0b2248c292a1358c80ddc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
