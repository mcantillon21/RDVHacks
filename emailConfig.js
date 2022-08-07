// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyD-SNVkaZF7RDRP5Zu30C-jCCgpz5d_ZP0",
    authDomain: "union-24cfe.firebaseapp.com",
    projectId: "union-24cfe",
    storageBucket: "union-24cfe.appspot.com",
    messagingSenderId: "372446167219",
    appId: "1:372446167219:web:973875ea02fa5ae580b0c6",
  };

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

const auth = getAuth(firebase);

export { auth, firebase }