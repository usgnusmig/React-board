// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2mgAZmZ9PSF5fcdEa21I_EDa_SMoP3FY",
  authDomain: "my-project-a068d.firebaseapp.com",
  databaseURL: "https://my-project-a068d-default-rtdb.firebaseio.com",
  projectId: "my-project-a068d",
  storageBucket: "my-project-a068d.appspot.com",
  messagingSenderId: "971401534590",
  appId: "1:971401534590:web:c49fe88470c26006ad8c2f",
  measurementId: "G-88NBT7B28Y",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
