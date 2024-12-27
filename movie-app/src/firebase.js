import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDfsLCvooVzB7po1ZEHAwmTB0qOrwJVfYQ",
  authDomain: "movie-app-f2b71.firebaseapp.com",
  projectId: "movie-app-f2b71",
  storageBucket: "movie-app-f2b71.firebasestorage.app",
  messagingSenderId: "753318272407",
  appId: "1:753318272407:web:9a7737cb4296be1bf178d2",
  measurementId: "G-N4YHJYH7FB"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth};
