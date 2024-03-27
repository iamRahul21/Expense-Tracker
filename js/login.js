import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-analytics.js";

const firebaseConfig = {
    apiKey: "AIzaSyBiQp2fRrqYdTK3yxgyTp3tGEjMldnYkJU",
    authDomain: "project-hisap.firebaseapp.com",
    projectId: "project-hisap",
    storageBucket: "project-hisap.appspot.com",
    messagingSenderId: "770467393670",
    appId: "1:770467393670:web:b0fecaa735911e40f3a107",
    measurementId: "G-PS9RG2H51V"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
auth.languageCode = 'en';
const provider = new GoogleAuthProvider();

const googleLogin = document.getElementById("login-with-google-btn");
googleLogin.addEventListener("click", function () {
    signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            // const token = credential.accessToken;
            const user = result.user;
            console.log(user);
            window.location.href = "../screens/home.html"
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // const email = error.customData.email;
            // const credential = GoogleAuthProvider.credentialFromError(error);
        });  
})