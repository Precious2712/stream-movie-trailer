import { auth } from './Firebase/firebaseConfig.js';
import {
    createUserWithEmailAndPassword,
} from 'https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js'

const userData = document.getElementById('userDataWithEmailAndPassword');
console.log('data', userData);
const submitEmailAndPasswordBtn = document.getElementById('buttonToLogEmailAndPassword');
const textError = document.getElementById('textError');

async function handleSubmitEmailAndPassword(e) {
    e.preventDefault(e);
    console.log('handleSubmitEmailAndPassword');

    const email = userData.email.value;
    const password = userData.password.value;

    if (!email || !password) {
        alert('Please fill in your email and password');
    }

    console.log(email, password);

    try {
        const submitData = await createUserWithEmailAndPassword(auth, email, password);
        console.log("User created:", submitData.user);
        alert('Your account has been successfully created');
        if (submitData) {
            window.location.href = '../HomePage/home.html'
            return
        };
        userData.reset();
    } catch (error) {
        console.error("Error creating user:", error.message);
        textError.textContent = error.message;
        textError.style.fontSize = '13px';
        textError.style.color = 'red';
    }
}

userData.addEventListener('submit', handleSubmitEmailAndPassword);