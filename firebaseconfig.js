import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCcVKO60qprZIPN1FuJp_FBv3B-e7sOUHI",
  authDomain: "expenseapp-93da9.firebaseapp.com",
  projectId: "expenseapp-93da9",
  storageBucket: "expenseapp-93da9.appspot.com",
  messagingSenderId: "464189285656",
  appId: "1:464189285656:web:575e8f5c23fd330d52aa6d"
};

// Initialize Firebase
const FIREBASE_APP = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const FIRESTORE_DB = getFirestore(FIREBASE_APP);
const FIREBASE_AUTH = getAuth(FIREBASE_APP);

export { FIRESTORE_DB, FIREBASE_AUTH };
