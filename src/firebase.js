import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBnWTFH0CTNh-ZDpvd5V6BIcYfnwQjUa_o",
  authDomain: "auth-project-4be3a.firebaseapp.com",
  projectId: "auth-project-4be3a",
  storageBucket: "auth-project-4be3a.appspot.com",
  messagingSenderId: "553604030945",
  appId: "1:553604030945:web:8a02dcb9554e8974a1b2a0",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
