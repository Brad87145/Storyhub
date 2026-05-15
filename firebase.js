import { initializeApp }
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getFirestore
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

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

/* DATABASE */

const db =
  getFirestore(app);

console.log(
  "Firestore Connected!"
);

export {
  db
};
