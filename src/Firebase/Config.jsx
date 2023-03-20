// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGu04QI1EwvyTyutAoggXLoYGQSNfwpmE",
  authDomain: "xureflix-ed9e0.firebaseapp.com",
  projectId: "xureflix-ed9e0",
  storageBucket: "xureflix-ed9e0.appspot.com",
  messagingSenderId: "665948103984",
  appId: "1:665948103984:web:cb77dc9840fd5fc95a14f5",
  measurementId: "G-YG9GH8FY08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
