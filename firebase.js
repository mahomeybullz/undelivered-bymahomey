// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAaKSgUl4S57zobPgSAgckvIt8Lu-hJgpU",
  authDomain: "undelivered-by-mahomey-36396.firebaseapp.com",
  projectId: "undelivered-by-mahomey-36396",
  storageBucket: "undelivered-by-mahomey-36396.firebasestorage.app",
  messagingSenderId: "851950545908",
  appId: "1:851950545908:web:1c30e9031a5412f528a7a1",
  measurementId: "G-TN4QQY6WRW"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
