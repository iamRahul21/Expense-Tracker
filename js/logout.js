import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut} from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
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

export function logout() {
    signOut(auth).then(() => {
        console.log("User signed out successfully");
        window.location.href = "../screens/index.html";
    }).catch((error) => {
        console.error("Error signing out:", error);
    });
}
