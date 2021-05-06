// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBN1JnQNL9TyLFIz4uPIiTFzJinrAmkKbw",
  authDomain: "whatsapp-clone-5605d.firebaseapp.com",
  projectId: "whatsapp-clone-5605d",
  storageBucket: "whatsapp-clone-5605d.appspot.com",
  messagingSenderId: "256481959544",
  appId: "1:256481959544:web:d6dddb7c629c6c2712d78d",
  measurementId: "G-BY9RFCEEYJ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;