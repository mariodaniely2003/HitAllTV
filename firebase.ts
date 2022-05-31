// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNx6c1HFwWaDzdStpKYAlYlROOYlh4taQ",
  authDomain: "optimum-bonbon-347513.firebaseapp.com",
  projectId: "optimum-bonbon-347513",
  storageBucket: "optimum-bonbon-347513.appspot.com",
  messagingSenderId: "309559939520",
  appId: "1:309559939520:web:836e08066c1d715f24b825",
  measurementId: "G-QHRFH8LMER"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }