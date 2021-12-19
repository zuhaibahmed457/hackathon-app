import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBWfuBzJkV0PzHdzAgpCcHo8Dfjp6maE8U",
    authDomain: "final-hackaton-1bc1c.firebaseapp.com",
    projectId: "final-hackaton-1bc1c",
    storageBucket: "final-hackaton-1bc1c.appspot.com",
    messagingSenderId: "297252909596",
    appId: "1:297252909596:web:d087fa151d6193d94ca5d9",
    measurementId: "G-CRRQDJ0LBF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const database = getDatabase(app);
const auth = getAuth();

export { auth, database, createUserWithEmailAndPassword, signInWithEmailAndPassword }