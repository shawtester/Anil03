
import { getStorage } from "firebase/storage";

import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";





// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDEtIPilDSrFTt1fSVjm57NZwrVjWK5JI",
  authDomain: "anil-f1744.firebaseapp.com",
  projectId: "anil-f1744",
  storageBucket: "anil-f1744.appspot.com",
  messagingSenderId: "738164673659",
  appId: "1:738164673659:web:6c9cb77c9276106925e6de"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const storage = getStorage(app); 
const auth = getAuth(app)
export {fireDB,auth,storage};

// Initialize Firebase

