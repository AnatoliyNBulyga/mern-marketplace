// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mern-estate-c789e.firebaseapp.com",
    projectId: "mern-estate-c789e",
    storageBucket: "mern-estate-c789e.appspot.com",
    messagingSenderId: "170804583423",
    appId: "1:170804583423:web:595a956f32d8188132a5ca"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);