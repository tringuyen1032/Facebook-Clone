import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
   apiKey: "AIzaSyD5sYG7AmPTG609Em-8VNLhPn2p6hmQBEQ",
   authDomain: "facebook-clone-cc450.firebaseapp.com",
   databaseURL: "https://facebook-clone-cc450-default-rtdb.firebaseio.com",
   projectId: "facebook-clone-cc450",
   storageBucket: "facebook-clone-cc450.appspot.com",
   messagingSenderId: "387177560704",
   appId: "1:387177560704:web:65337c17061b19f87c8465",
   measurementId: "G-M2EREBXYL4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();