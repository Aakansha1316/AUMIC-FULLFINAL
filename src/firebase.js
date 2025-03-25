// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB4i6PRNmLniXKIpqhnhYebGBaVEuSl1vw",
    authDomain: "aumic-0009.firebaseapp.com",
    projectId: "aumic-0009",
    storageBucket: "aumic-0009.firebasestorage.app",
    messagingSenderId: "325428562738",
    appId: "1:325428562738:web:7af1ea24c7e5947d9d652b",
    measurementId: "G-08LP7SVNJB"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
