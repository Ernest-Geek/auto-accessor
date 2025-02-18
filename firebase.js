// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdg6hJqOca-zrrk7rB_T6V_fvymwh-Gxg",
  authDomain: "worktoolz.firebaseapp.com",
  projectId: "worktoolz",
  storageBucket: "worktoolz.firebasestorage.app",
  messagingSenderId: "574089340019",
  appId: "1:574089340019:web:03d68e40b13f48724e3606",
  measurementId: "G-D8ZDEHZE1G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);