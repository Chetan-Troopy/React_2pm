import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDlebPgvJlkoVnRZR9F4DiDhyO8GOrNKgA",
  authDomain: "tutorial-firebase-app.firebaseapp.com",
  projectId: "tutorial-firebase-app",
  storageBucket: "tutorial-firebase-app.firebasestorage.app",
  messagingSenderId: "1022932694757",
  appId: "1:1022932694757:web:d6ab9fc2bd3963ced2860c",
  databaseURL: "https://tutorial-firebase-app-default-rtdb.firebaseio.com"
};

export const app = initializeApp(firebaseConfig);