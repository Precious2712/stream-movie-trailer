
import { auth } from '../emailAndPassword/Firebase/firebaseConfig.js';

import {
    signInWithEmailAndPassword,
} from 'https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js'

const loginForm = document.getElementById('loginForm');
const directToSignUp = document.getElementById('directToSignUp');
console.log(directToSignUp);

function togglePassword() {
    const passwordInput = document.getElementById("password");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}

window.togglePassword = togglePassword;

function forgotPassword() {
    const email = document.getElementById("email").value;
    if (!email) {
        alert("Please enter your email to reset your password.");
        return;
    }
    alert("A password reset link has been sent to " + email);
    // Here, you can integrate Firebase password reset functionality if needed.
}


async function userLogIn(e) {
    e.preventDefault();
    const userEmail = loginForm.email.value.trim();
    const userPassword = loginForm.password.value.trim();

    if (userEmail === '' || userPassword === '') {
        alert('Please enter email and password');
        return;
    }

    try {
        const userCredential = await signInWithEmailAndPassword(auth, userEmail, userPassword);
        console.log('User credential', userCredential);
        alert("Login Successful");

        localStorage.setItem("userLoggedIn", "true");

        window.location.href = '../index.html';
    } catch (error) {
        console.error(error);
        alert(error.message);
    }
}

loginForm.addEventListener("submit", userLogIn);



directToSignUp.addEventListener('click', () => {
    console.log('complete');
    window.location.href = '../SignUpPage/signInWithEmailAndPaaword.html'
})