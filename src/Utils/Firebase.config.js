import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDktisbj8e-Egs-gI9Ell_6VBUmwBi62NQ",
    authDomain: "jobify-19620.firebaseapp.com",
    projectId: "jobify-19620",
    storageBucket: "jobify-19620.appspot.com",
    messagingSenderId: "879365655062",
    appId: "1:879365655062:web:0cbbd5d9fbc4b1be9dc337",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();
const storage = getStorage();
const storageRef = ref(storage);

export { auth, db, googleProvider, storage, storageRef };
