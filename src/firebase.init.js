// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCEEGVPS05Kj6MOQq9Apr8alhB_-brcCLM",
    authDomain: "tech-bd-abf2a.firebaseapp.com",
    projectId: "tech-bd-abf2a",
    storageBucket: "tech-bd-abf2a.appspot.com",
    messagingSenderId: "379099557980",
    appId: "1:379099557980:web:c90d5942469b013acc7699"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;