import {getFirestore} from "firebase/firestore"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAYGp9d-0ePj99ojAPxd-KGaskDP7V2qRE",
  authDomain: "bilal-portfolio1.firebaseapp.com",
  projectId: "bilal-portfolio1",
  storageBucket: "bilal-portfolio1.appspot.com",
  messagingSenderId: "930623552121",
  appId: "1:930623552121:web:3b1a8f7e9a4675092532a8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore();