import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";

import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

/* ------------------ FIREBASE CONFIG ------------------ */

const firebaseConfig = {
  apiKey: "AIzaSyDYyQiLxmJPDye7uu3mEL_3EtRaf1NKGM8",
  authDomain: "readease-ebde8.firebaseapp.com",
  projectId: "readease-ebde8",
  storageBucket: "readease-ebde8.firebasestorage.app",
  messagingSenderId: "747409157163",
  appId: "1:747409157163:web:98930fbafdf114ecf38e6e",
  measurementId: "G-XNCNNMYMG7"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

/* ------------------ LOGIN ------------------ */

window.login = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      window.location.href = "home.html";
    })
    .catch((error) => {
      showMessage(error.message);
    });
};

/* ------------------ REGISTER ------------------ */

window.register = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      showMessage("✅ Registration successful! You can now login.");
    })
    .catch((error) => {
      showMessage("❌ " + error.message);
    });
};

/* ------------------ GOOGLE LOGIN ------------------ */

window.googleLogin = function () {
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({ prompt: "select_account" });

  signInWithPopup(auth, provider)
    .then(() => {
      window.location.href = "home.html";
    })
    .catch((error) => {
      showMessage(error.message);
    });
};

/* ------------------ LOGOUT ------------------ */

window.logout = function () {
  signOut(auth).then(() => {
    window.location.href = "index.html";
  });
};

/* ------------------ AUTH STATE CHECK ------------------ */

onAuthStateChanged(auth, (user) => {
  if (window.location.pathname.includes("home.html")) {
    if (user) {
      document.getElementById("userEmail").innerText =
        "Welcome: " + user.email;
    } else {
      window.location.href = "index.html";
    }
  }
});

/* ------------------ VOICE LOGIN ------------------ */

window.startVoiceLogin = function () {
  if (!("webkitSpeechRecognition" in window)) {
    showMessage("Voice recognition not supported. Use Chrome.");
    return;
  }

  const recognition = new webkitSpeechRecognition();
  recognition.lang = "en-US";
  recognition.continuous = false;
  recognition.interimResults = false;

  let step = "email";

  showMessage("🎤 Say your email address");
  recognition.start();

  recognition.onresult = function (event) {
    const speech = event.results[0][0].transcript.trim();

    if (step === "email") {
      document.getElementById("email").value = speech;
      step = "password";
      showMessage("🎤 Now say your password");

      recognition.stop();
      setTimeout(() => recognition.start(), 600);
    } else {
      document.getElementById("password").value = speech;
      showMessage("Logging in...");
      recognition.stop();
      login();
    }
  };

  recognition.onerror = function (event) {
    showMessage("Voice error: " + event.error);
  };
};

/* ------------------ MESSAGE HELPER ------------------ */

function showMessage(msg) {
  const status = document.getElementById("voiceStatus");
  if (status) {
    status.innerText = msg;
  } else {
    alert(msg);
  }
}

/* ------------------ REGISTER LINK CLICK ------------------ */

document.addEventListener("DOMContentLoaded", () => {
  const registerLink = document.getElementById("registerLink");
  if (registerLink) {
    registerLink.addEventListener("click", () => {
      register();
    });
  }
});