import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
   apiKey: "AIzaSyDBZIwgFlXV84Ylo1yQutjFFv8Xih0ZXsY",
   authDomain: "facebook-clone-f4e61.firebaseapp.com",
   databaseURL: "https://facebook-clone-f4e61-default-rtdb.firebaseio.com",
   projectId: "facebook-clone-f4e61",
   storageBucket: "facebook-clone-f4e61.appspot.com",
   messagingSenderId: "872630626536",
   appId: "1:872630626536:web:71efe0ea729b279456815d",
   measurementId: "G-NQYD66VNN8"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider }
export const realtimeDB = firebase.database();
export default db;