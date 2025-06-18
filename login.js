// login.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDKb24c_x1_nYM2hgS_-ZZTMXlyMPpGieQ",
  authDomain: "budget-buddy-5e3b4.firebaseapp.com",
  projectId: "budget-buddy-5e3b4",
  storageBucket: "budget-buddy-5e3b4.appspot.com",
  messagingSenderId: "296898817116",
  appId: "1:296898817116:web:8fce68757b10d945b2ca99"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    if (!user.emailVerified) {
      alert("Please verify your email before logging in.");
      return;
    }

    alert("Login successful!");
    window.location.href = "set-pin.html";
  } catch (error) {
    alert("Login failed: " + error.message);
  }
});
