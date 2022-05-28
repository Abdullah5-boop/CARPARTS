// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDu085yXXi0HR5eYjqMGDbC1v6q0cIEaSA",
    authDomain: "final-project-144dd.firebaseapp.com",
    projectId: "final-project-144dd",
    storageBucket: "final-project-144dd.appspot.com",
    messagingSenderId: "687744189515",
    appId: "1:687744189515:web:a4d9c0b5df4176a79739ce",
    measurementId: "G-X84XKVSTRZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export default auth