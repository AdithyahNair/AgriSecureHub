import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBeT2sbKUepAzBVrmakBgl9qBO36b1xfQk",
  authDomain: "agrihub-dafcf.firebaseapp.com",
  databaseURL:
    "https://agrihub-dafcf-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "agrihub-dafcf",
  storageBucket: "agrihub-dafcf.appspot.com",
  messagingSenderId: "558287744819",
  appId: "1:558287744819:web:7882579d4514188928d846",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase();

export { db, ref, onValue };
