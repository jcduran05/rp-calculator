import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
  
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain:  process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  databaseURL:  process.env.REACT_APP_FIREBASE_DATABASEURL,
  projectId:  process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket:  process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId:  process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
  appId:  process.env.REACT_APP_FIREBASE_APPID
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const auth = firebase.auth();

export const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const signOut = () => auth.signOut();

export const createUserProfileDocument = async (user, additionalData) => {
  if (!user) return;

  // Get a reference to the place in the database where a user profile might be.
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
      console.error('Error creating user', error.message);
    }
  }

  return getUserDocument(user.uid);
};

export const getUserDocument = async uid => {
  if (!uid) return null;
  try {
    return firestore.collection('users').doc(uid);
  } catch (error) {
    console.error('Error fetching user', error.message);
  }
};

export default firebase;