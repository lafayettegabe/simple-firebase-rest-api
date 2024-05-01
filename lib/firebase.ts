import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// ============================================================
// ============================================================
// ========= Put your own Firebase configuration here =========
// 👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇

const firebaseConfig = {
    apiKey: "AIzaSyCxqCyglAG9tUQlp8hxqpQFlJLKnog0h-w",
    authDomain: "os-example-313ee.firebaseapp.com",
    projectId: "os-example-313ee",
    storageBucket: "os-example-313ee.appspot.com",
    messagingSenderId: "754955767049",
    appId: "1:754955767049:web:f03b3eadd402e31a9fd7d8",
    measurementId: "G-SRV4Y5K1XE"
  };

// ☝️☝️☝️☝️☝️☝️☝️☝️☝️☝️☝️☝️☝️☝️☝️☝️☝️☝️☝️☝️☝️☝️☝️☝️
// ============================================================
// ============================================================

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)