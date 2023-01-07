import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCJFHttoxvjV3T4lIEpU3fgFaqq6diQS5k",
  authDomain: "fir-tutorial-465bd.firebaseapp.com",
  projectId: "fir-tutorial-465bd",
  storageBucket: "fir-tutorial-465bd.appspot.com",
  messagingSenderId: "1031019732315",
  appId: "1:1031019732315:web:3c2a5c58ae9a4330be4e7e",
  measurementId: "G-NGF1FXTFY2",
};
const app = initializeApp(firebaseConfig);
export const data = getFirestore(app);
export const auth = getAuth(app);
