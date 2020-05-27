import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAGbjGJiKOZBJiJyH-4hj_TbBf9hiD1jvs",
  authDomain: "wishtone-6e96a.firebaseapp.com",
  databaseURL: "https://wishtone-6e96a.firebaseio.com",
  projectId: "wishtone-6e96a",
  storageBucket: "wishtone-6e96a.appspot.com",
  messagingSenderId: "466514279497",
  appId: "1:466514279497:web:4d3d9ea81a2bdd20bb9398",
  measurementId: "G-8QC0064NE6",
};

firebase.initializeApp(config);

export const firestore = firebase.firestore();
export const auth = firebase.auth();

export const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(provider);

// this is for dev purposes only; don't ship, lucas!!!
window.firebase = firebase;

export default firebase;
