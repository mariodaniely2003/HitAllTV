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
  apiKey: "AIzaSyD7MD-rmLXg6IMx3MyoCzpnEk25pRQWXJ4",
  authDomain: "netflix-clone-yt-413d4.firebaseapp.com",
  projectId: "netflix-clone-yt-413d4",
  storageBucket: "netflix-clone-yt-413d4.appspot.com",
  messagingSenderId: "1031424060631",
  appId: "1:1031424060631:web:68d3ec2e2b0671969a5492",
  measurementId: "G-82BWBX8XET"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }