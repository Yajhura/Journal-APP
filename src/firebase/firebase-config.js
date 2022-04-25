import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA4deq_SfWkQ1K1zGu46pmqeoEZMGmnsas",
  authDomain: "react-app-journalapp-39c16.firebaseapp.com",
  projectId: "react-app-journalapp-39c16",
  storageBucket: "react-app-journalapp-39c16.appspot.com",
  messagingSenderId: "841275503703",
  appId: "1:841275503703:web:bb71b211ac6dec48575f12",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
