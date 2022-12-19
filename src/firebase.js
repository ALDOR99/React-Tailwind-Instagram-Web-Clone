import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
//----------------------------------------------------------------------------------------
const firebaseConfig = {
  apiKey: "AIzaSyCFhCIwftrRyc8pwvgBK-dxfNUjmpqfvGM",
  authDomain: "ali-instagram.firebaseapp.com",
  projectId: "ali-instagram",
  storageBucket: "ali-instagram.appspot.com",
  messagingSenderId: "928717889141",
  appId: "1:928717889141:web:2ff89e33f9dea7af19a23c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
