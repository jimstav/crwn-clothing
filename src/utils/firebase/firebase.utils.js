import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAZKldyuFO9uRpFLMokw3uS6w9lzBFfWvA",
  authDomain: "crwn-clothing-db-72f09.firebaseapp.com",
  projectId: "crwn-clothing-db-72f09",
  storageBucket: "crwn-clothing-db-72f09.firebasestorage.app",
  messagingSenderId: "75088740908",
  appId: "1:75088740908:web:ed62cf823d967b67560789",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
