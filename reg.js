import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";

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

document.getElementById("signupBtn").addEventListener("click", async () => {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  const termsAccepted = document.getElementById("terms").checked;

  if (!name || !email || !password || !termsAccepted) {
    alert("Fill all fields and accept the terms.");
    return;
  }

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    await sendEmailVerification(userCredential.user);
    alert("Verification email sent! Please check your inbox.");
    window.location.href = "verification.html";
  } catch (error) {
    alert("Signup failed: " + error.message);
  }
});
