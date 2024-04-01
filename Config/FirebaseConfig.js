// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHdgTgWVhQg_ya10Fer4pTA68G_0wegQc",
  authDomain: "nextjscloudmanager.firebaseapp.com",
  projectId: "nextjscloudmanager",
  storageBucket: "nextjscloudmanager.appspot.com",
  messagingSenderId: "85125553548",
  appId: "1:85125553548:web:a21d78fb5c97bf47b10aa9",
  measurementId: "G-VP8WQHEWJM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);