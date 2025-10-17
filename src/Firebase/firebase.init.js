// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6VCh5410gbO4RXOPF4bJeWyTUEe3VCSE",
  authDomain: "fir-firefighter-b1001.firebaseapp.com",
  projectId: "fir-firefighter-b1001",
  storageBucket: "fir-firefighter-b1001.firebasestorage.app",
  messagingSenderId: "626699620687",
  appId: "1:626699620687:web:a8b0a3496cb9d582b1753a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
