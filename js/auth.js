import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-analytics.js";
import { logout } from "./logout.js";

const firebaseConfig = {
    apiKey: "AIzaSyBiQp2fRrqYdTK3yxgyTp3tGEjMldnYkJU",
    authDomain: "project-hisap.firebaseapp.com",
    projectId: "project-hisap",
    storageBucket: "project-hisap.appspot.com",
    messagingSenderId: "770467393670",
    appId: "1:770467393670:web:b0fecaa735911e40f3a107",
    measurementId: "G-PS9RG2H51V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
auth.languageCode = 'en';
const provider = new GoogleAuthProvider();

function updateUserProfile(user) {
    const userName = user.displayName;
    const userEmail = user.email;
    const userProfilePicture = user.photoURL;

    // update the profile section withe user data
    document.getElementById("userName").textContent = userName;
    document.getElementById("userEmail").textContent = userEmail;
    document.getElementById("userProfilePicture").src = userProfilePicture;
}

onAuthStateChanged(auth, (user) => {
    if (user) {
        // user is signed in, call the updateUserProfile function
        updateUserProfile(user);
        const uid = user.uid;
        return uid;
    }else{
        // user is not signed in, redirect to the registration page
        // alert("Login again please");
        window.location.href = "../screens/index.html";
    }
});

const logoutButton = document.getElementById("logout-btn");
if (logoutButton) {
    logoutButton.addEventListener("click", logout);
} else {
    console.error("Logout button not found");
}