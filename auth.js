import { initializeApp }
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

/* CONFIG */

const firebaseConfig = {

  apiKey:
    "YOUR_API_KEY",

  authDomain:
    "storyhub-47f31.firebaseapp.com",

  projectId:
    "storyhub-47f31",

  storageBucket:
    "storyhub-47f31.appspot.com",

  messagingSenderId:
    "432892754504",

  appId:
    "1:432892754504:web:2498256d6aea0abbd7767d"

};

/* INIT */

const app =
  initializeApp(firebaseConfig);

const auth =
  getAuth(app);

/* ELEMENTS */

const signupBtn =
  document.getElementById("signup-btn");

const loginBtn =
  document.getElementById("login-btn");

const logoutBtn =
  document.getElementById("logout-btn");

/* SIGN UP */

signupBtn?.addEventListener("click", () => {

  const email =
    document.getElementById("email").value;

  const password =
    document.getElementById("password").value;

  createUserWithEmailAndPassword(
    auth,
    email,
    password
  )

  .then(() => {

    alert("Account created!");

  })

  .catch((error) => {

    alert(error.message);

  });

});

/* LOGIN */

loginBtn?.addEventListener("click", () => {

  const email =
    document.getElementById("email").value;

  const password =
    document.getElementById("password").value;

  signInWithEmailAndPassword(
    auth,
    email,
    password
  )

  .then(() => {

    alert("Logged in!");

  })

  .catch((error) => {

    alert(error.message);

  });

});

/* LOGOUT */

logoutBtn?.addEventListener("click", () => {

  signOut(auth)

  .then(() => {

    alert("Logged out!");

  });

});
