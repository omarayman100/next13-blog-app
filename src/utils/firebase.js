// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhNo5PpNUwM0VGogFn8qJKhYrnH7lzaos",
  authDomain: "technawy.firebaseapp.com",
  projectId: "technawy",
  storageBucket: "technawy.appspot.com",
  messagingSenderId: "990305024958",
  appId: "1:990305024958:web:60a78dc83cedd2f52e57ef",
  measurementId: "G-KEJ2N40W2H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);