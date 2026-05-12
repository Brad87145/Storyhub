// FIREBASE IMPORTS

import { initializeApp }
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

// FIREBASE CONFIG

const firebaseConfig = {

  apiKey:
    "AIzaSyB6LmBQH13pl-RMI8nkwmntG82FaKzvXRg",

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

// INITIALIZE

const app =
  initializeApp(firebaseConfig);

console.log(
  "Firebase Connected!"
);
