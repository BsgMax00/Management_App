import {initializeApp} from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Firebase config here
const firebaseConfig = {
  apiKey: "AIzaSyBifM8G5cFLplQpfOcTOGvqaIIhkoVfsm8",
  authDomain: "managementapp-52808.firebaseapp.com",
  projectId: "managementapp-52808",
  storageBucket: "managementapp-52808.appspot.com",
  messagingSenderId: "208486842709",
  appId: "1:208486842709:web:0e9f23c3c0401272fa2fdc",
  measurementId: "G-6HNRXB9ZBG"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const database = getFirestore(firebaseApp)

export default database;