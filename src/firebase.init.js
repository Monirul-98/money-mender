// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvcXYvDUQIJCnNYSzQQmiGGyTrFRmX2DM",
  authDomain: "money-mender.firebaseapp.com",
  projectId: "money-mender",
  storageBucket: "money-mender.appspot.com",
  messagingSenderId: "731776534580",
  appId: "1:731776534580:web:f40b50d250df4a037f6261",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
