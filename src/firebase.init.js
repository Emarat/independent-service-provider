// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCMBYpUiqepQHNtgIVoO6zOZFzdaqM20SA",
    authDomain: "dentario-b2d32.firebaseapp.com",
    projectId: "dentario-b2d32",
    storageBucket: "dentario-b2d32.appspot.com",
    messagingSenderId: "789445808509",
    appId: "1:789445808509:web:060eac6b241989d5aabc14"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;