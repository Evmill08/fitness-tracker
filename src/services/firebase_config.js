// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBV8egqMdyHHIxusEUVpZXUN06mdb8Bkq0",
  authDomain: "fitness-tracker-e6687.firebaseapp.com",
  projectId: "fitness-tracker-e6687",
  storageBucket: "fitness-tracker-e6687.firebasestorage.app",
  messagingSenderId: "881317008371",
  appId: "1:881317008371:web:1c66f8f6945a46c515b886",
  measurementId: "G-05VH4TY97W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const userID = 'userID'

export {db, userID};