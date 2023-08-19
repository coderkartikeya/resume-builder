// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyCcAMDzKt5wUw2iGqUiM9cvLlvcaB9aMJw",
  authDomain: "resume-8d35d.firebaseapp.com",
  projectId: "resume-8d35d",
  storageBucket: "resume-8d35d.appspot.com",
  messagingSenderId: "498209405637",
  appId: "1:498209405637:web:9814361925575476540eac",
  measurementId: "G-W4J5CT98Z6"
};

firebase.initializeApp(firebaseConfig);
// var database = firebase.database();
export const db = getFirestore(firebase);