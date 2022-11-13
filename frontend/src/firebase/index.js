// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoTwXU84Yum4YluMbOLijrh4cCtTnTS3Y",
  authDomain: "ku-d29cc.firebaseapp.com",
  projectId: "ku-d29cc",
  storageBucket: "ku-d29cc.appspot.com",
  messagingSenderId: "1076753040628",
  appId: "1:1076753040628:web:ae8952052c7b7abd158aa1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db};




