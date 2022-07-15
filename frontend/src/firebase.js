import { initializeApp } from "firebase/app";
import firebase from "./firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useEffect, useState } from "react";
const firebaseAuth = {
  apiKey: "AIzaSyCTo99yvNkarM_-97UHJCWHE7KASyBy6Lw",
  authDomain: "mydemo-f32e4.firebaseapp.com",
  projectId: "mydemo-f32e4",
  storageBucket: "mydemo-f32e4.appspot.com",
  messagingSenderId: "279043222441",
  appId: "1:279043222441:web:075be30ad268bceeb3b2b8",
  measurementId: "G-NV56QC5D0L",
};
const app = initializeApp(firebaseAuth);
const auth = getAuth();
export function logout() {
  return signOut(auth);
}
export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}
export function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function useAuth() {
  const [current, setCurrent] = useState();
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setCurrent(user));
  }, []);
  return current;
}
