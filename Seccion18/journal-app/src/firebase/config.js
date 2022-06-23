
// Import the functions you need from the SDKs you need
import {getAuth} from 'firebase/auth'
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApQ5A3JQ33_7oh-ijMDe0B1lc7tNeJXrA",
  authDomain: "reactcurso-cfa8c.firebaseapp.com",
  projectId: "reactcurso-cfa8c",
  storageBucket: "reactcurso-cfa8c.appspot.com",
  messagingSenderId: "216822314780",
  appId: "1:216822314780:web:ceb49021966e86a80facd9"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);