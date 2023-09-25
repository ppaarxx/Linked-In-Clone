import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
// import firebaseConfig from "./config"

const firebaseConfig = {
    apiKey: "AIzaSyDOJzBQ3xqx_Nqf3yTiR7nYATf24IdVQDE",
    authDomain: "messaging-8e1a4.firebaseapp.com",
    projectId: "messaging-8e1a4",
    storageBucket: "messaging-8e1a4.appspot.com",
    messagingSenderId: "1065866245207",
    appId: "1:1065866245207:web:691afb37e07fee1f2d9f12"
  };

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
