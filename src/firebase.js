// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByyM_0NL14pIL1u0G8KwANyWx5CN8EOi8",
  authDomain: "fir-chat-b1c2a.firebaseapp.com",
  projectId: "fir-chat-b1c2a",
  storageBucket: "fir-chat-b1c2a.appspot.com",
  messagingSenderId: "4557700607",
  appId: "1:4557700607:web:f8b194d9656ac6a94b7bca",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();

export { auth, db };