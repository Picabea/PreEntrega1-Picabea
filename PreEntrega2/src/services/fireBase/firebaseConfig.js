// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_apiKey,
//   authDomain: import.meta.env.VITE_authDomain,
//   databaseURL: import.meta.env.VITE_databaseURL,
//   projectId: import.meta.env.VITE_projectId,
//   storageBucket: import.meta.env.VITE_storageBucket,
//   messagingSenderId: import.meta.env.VITE_messagingSenderId,
//   appId: import.meta.env.VITE_appId
// };
const firebaseConfig = {
  apiKey: "AIzaSyDsSzwoykR48dj54leKSDSyZVYjF3tDaB4",
  authDomain: "bebidasronda.firebaseapp.com",
  projectId: "bebidasronda",
  storageBucket: "bebidasronda.appspot.com",
  messagingSenderId: "243866737354",
  appId: "1:243866737354:web:2c8b37bd2dc7016224f233"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)