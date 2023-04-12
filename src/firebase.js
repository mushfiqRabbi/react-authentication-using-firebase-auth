import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDSCGHbxefiAs35RTxSiYeJc0G5oKZ5x1w",
  authDomain: "first-project-70ac2.firebaseapp.com",
  projectId: "first-project-70ac2",
  storageBucket: "first-project-70ac2.appspot.com",
  messagingSenderId: "724994360802",
  appId: "1:724994360802:web:3c848e00bb297db48a65bb",
};

const app = initializeApp(firebaseConfig);

export default getAuth(app);
