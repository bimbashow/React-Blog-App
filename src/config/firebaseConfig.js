import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCCrr8Cgfrt8UIMzYo4OnnCYq_tCCjNfS8",
  authDomain: "myreactblog-4d1c6.firebaseapp.com",
  projectId: "myreactblog-4d1c6",
  storageBucket: "myreactblog-4d1c6.appspot.com",
  messagingSenderId: "172995600523",
  appId: "1:172995600523:web:9bfda5c3cc57e6bcc9348e"
};


 const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app);


export const auth = getAuth(app);
