// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPkvJYbhbPUodhVMXC8WiOHzaqgYA48as",
  authDomain: "clone-6ca53.firebaseapp.com",
  projectId: "clone-6ca53",
  storageBucket: "clone-6ca53.appspot.com",
  messagingSenderId: "972782834426",
  appId: "1:972782834426:web:a1fefb637dabc467fe6f43",
  measurementId: "G-20JT604GJS"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const analytics = getAnalytics(app);

export { db, auth }