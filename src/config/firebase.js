// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported as analyticsIsSupported } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1mX2gxZFqTfjuDwpxOXVrZSLWvs2pn-w",
  authDomain: "vite-contact-dfe26.firebaseapp.com",
  projectId: "vite-contact-dfe26",
  storageBucket: "vite-contact-dfe26.appspot.com",
  messagingSenderId: "762170231144",
  appId: "1:762170231144:web:956b0be3b5871004d16edd",
  measurementId: "G-NXG9MD3WJG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

// Initialize Analytics if supported
let analytics;
analyticsIsSupported().then((isSupported) => {
  if (isSupported) {
    analytics = getAnalytics(app);
  }
});

export { analytics };