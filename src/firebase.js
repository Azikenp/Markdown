import { initializeApp } from "firebase/app";
import {getFirestore, collection} from '.firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAuhfcjvXxTXmBnYgJ-17uATxjK8nqFVW8",
  authDomain: "markdown-54e85.firebaseapp.com",
  projectId: "markdown-54e85",
  storageBucket: "markdown-54e85.appspot.com",
  messagingSenderId: "63323601069",
  appId: "1:63323601069:web:77a3bef902150e54cfee24"
};


const app = initializeApp(firebaseConfig); 
const db = getFirestore(app);

export const notesCollection = collection(db, "notes");