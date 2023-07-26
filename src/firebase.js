// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsp5Qjr_z8tNNxGXjvvtgdkBmWx_yxDJo",
  authDomain: "imovie-thesis-ie4c1.firebaseapp.com",
  projectId: "imovie-thesis-ie4c1",
  storageBucket: "imovie-thesis-ie4c1.appspot.com",
  messagingSenderId: "654866048799",
  appId: "1:654866048799:web:c3086ef9bd69a59f1ef22a",
  measurementId: "G-WNYV9HDD18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);