// /javascript/firebaseauth.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-auth.js";

// 🔹 তোমার Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyA4p2HR9A9Ofn4av_WAj8A6FvAbGg5Ppi8",
  authDomain: "orlina-9eb08.firebaseapp.com",
  projectId: "orlina-9eb08",
  storageBucket: "orlina-9eb08.firebasestorage.app",
  messagingSenderId: "576624295485",
  appId: "1:576624295485:web:f4784acef7f190100a7454"
};

// 🔹 Initialize + Export
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
