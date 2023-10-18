// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDL9ZOy7YVDfZM0AIn9YUf-6QSV-haraSk",
  authDomain: "brand-shop-97bf8.firebaseapp.com",
  projectId: "brand-shop-97bf8",
  storageBucket: "brand-shop-97bf8.appspot.com",
  messagingSenderId: "304503335245",
  appId: "1:304503335245:web:a8a0ccf530951767b4ef04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth