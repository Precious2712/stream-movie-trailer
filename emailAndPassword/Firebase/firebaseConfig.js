
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import {
    getAuth
} from 'https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD-zNPhThB83NjARFdgkZZJeezwiVRLWkc",
    authDomain: "auth-project-ad95c.firebaseapp.com",
    projectId: "auth-project-ad95c",
    storageBucket: "auth-project-ad95c.firebasestorage.app",
    messagingSenderId: "24131359881",
    appId: "1:24131359881:web:f42baf45e40c520d3aa258"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);