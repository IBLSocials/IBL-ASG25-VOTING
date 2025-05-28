// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBNCxKY3DwggCD4wiIqOpOh0MN259_4I_E",
  authDomain: "ibl-asg-fanvote-25.firebaseapp.com",
  projectId: "ibl-asg-fanvote-25",
  storageBucket: "ibl-asg-fanvote-25.appspot.com",
  messagingSenderId: "231424422226",
  appId: "1:231424422226:web:502de62985b2f85ebbca8b"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
