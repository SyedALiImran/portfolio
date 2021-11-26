// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC09R_tK9O3LEJWjpwwPOrq3D436uaGpe4",
  authDomain: "syedaliimran-portfolio.firebaseapp.com",
  projectId: "syedaliimran-portfolio",
  storageBucket: "syedaliimran-portfolio.appspot.com",
  messagingSenderId: "95382366566",
  appId: "1:95382366566:web:422e204e2f1af7055100a7",
  measurementId: "G-32SK20EGGG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);