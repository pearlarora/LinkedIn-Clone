import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyCBwF9oPFohB5ne1amElQmh_3P4endop5M",
  authDomain: "linkedin-clone-7c317.firebaseapp.com",
  projectId: "linkedin-clone-7c317",
  storageBucket: "linkedin-clone-7c317.appspot.com",
  messagingSenderId: "460469587297",
  appId: "1:460469587297:web:bb55108f2f31dc1061c920",
  measurementId: "G-P3VEJ94MRT",
});

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
