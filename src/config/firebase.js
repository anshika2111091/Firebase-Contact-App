// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCMH1R-9yeol9kCfhq07zj37_qaM73-Yzs",
  authDomain: "fir-database-f1302.firebaseapp.com",
  projectId: "fir-database-f1302",
  storageBucket: "fir-database-f1302.appspot.com",
  messagingSenderId: "77283779414",
  appId: "1:77283779414:web:79a5221329e7c1f0986cf7"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

