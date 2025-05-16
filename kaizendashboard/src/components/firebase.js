// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSbs0D6FJo7tGwuq59EQynNdI6G_Wrc9s",
  authDomain: "analytics-dashboard-4f174.firebaseapp.com",
  projectId: "analytics-dashboard-4f174",
  storageBucket: "analytics-dashboard-4f174.firebasestorage.app",
  messagingSenderId: "717205599196",
  appId: "1:717205599196:web:7af5c5c59c136224799519"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);