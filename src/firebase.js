import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/firebase-storage";

const config = {
  apiKey: "AIzaSyAGbjGJiKOZBJiJyH-4hj_TbBf9hiD1jvs",
  authDomain: "wishtone-6e96a.firebaseapp.com",
  databaseURL: "https://wishtone-6e96a.firebaseio.com",
  projectId: "wishtone-6e96a",
  storageBucket: "gs://wishtone-6e96a.appspot.com/",
  messagingSenderId: "466514279497",
  appId: "1:466514279497:web:4d3d9ea81a2bdd20bb9398",
  measurementId: "G-8QC0064NE6",
};

firebase.initializeApp(config);

export const firestore = firebase.firestore();
export const auth = firebase.auth();

export const provider = new firebase.auth.GoogleAuthProvider();
export const twitterProvider = new firebase.auth.TwitterAuthProvider();
export const facebookProvider = new firebase.auth.FacebookAuthProvider();

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const signInWithTwitter = () => auth.signInWithPopup(twitterProvider);
export const signInWithFacebook = () =>
  auth
    .signInWithPopup(facebookProvider)
    .then(function (result) {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
    })
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
// this is for dev purposes only; don't ship, lucas!!!
window.firebase = firebase;

export const createUserProfileDocument = async (user, additionalData) => {
  if (!user) return;

  // Get a reference to the place in the DB where a user profile might be.
  const userRef = firestore.doc(`users/${user.uid}`);

  // Go and fetch the document from that location.
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email, photoURL } = user;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.error("Error creating user", error);
    }
  }

  return getUserDocument(user.uid);
};

export const getUserDocument = async (uid) => {
  if (!uid) return null;
  try {
    const userDocument = await firestore.collection("users").doc(uid).get();

    return { uid, ...userDocument.data() };
  } catch (error) {
    console.error("Error fetching user", error.message);
  }
};

export default firebase;
