import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCkIR9-_0-XtDN7u1k-LXY5r0EcZwDsYeY",
  authDomain: "mangates-1efb9.firebaseapp.com",
  projectId: "mangates-1efb9",
  storageBucket: "mangates-1efb9.firebasestorage.app",
  messagingSenderId: "472660037971",
  appId: "1:472660037971:web:88bc3530adb400e25391a6",
  measurementId: "G-47933641NL"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };  