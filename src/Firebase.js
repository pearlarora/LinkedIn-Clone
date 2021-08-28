import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCBwF9oPFohB5ne1amElQmh_3P4endop5M",
  authDomain: "linkedin-clone-7c317.firebaseapp.com",
  projectId: "linkedin-clone-7c317",
  storageBucket: "linkedin-clone-7c317.appspot.com",
  messagingSenderId: "460469587297",
  appId: "1:460469587297:web:bb55108f2f31dc1061c920",
  measurementId: "G-P3VEJ94MRT",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
