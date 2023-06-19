import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD-NNNMNI7HGwaZGMADpbZjxKWB7bHYSvw",
    authDomain: "qualaboa-f3c9f.firebaseapp.com",
    databaseURL: "https://qualaboa-f3c9f-default-rtdb.firebaseio.com",
    projectId: "qualaboa-f3c9f",
    storageBucket: "qualaboa-f3c9f.appspot.com",
    messagingSenderId: "848520235121",
    appId: "1:848520235121:web:535e3c52b334a2352db3d0"
  };
  
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
// export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
