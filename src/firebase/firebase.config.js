// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRZohcuHycoSjCoy5ULfwqBSMWMXTCg74",
  authDomain: "coffee-project-ece74.firebaseapp.com",
  projectId: "coffee-project-ece74",
  storageBucket: "coffee-project-ece74.appspot.com",
  messagingSenderId: "349465930251",
  appId: "1:349465930251:web:232e31a7fe311ece2b350e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;