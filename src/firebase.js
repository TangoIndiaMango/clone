// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
/* ... */

// Initialize Firebase


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyACxo1PcKa3YvaFdYuQfxxIjIWcUt5OQRY",
    authDomain: "facebook-clone-b7a5b.firebaseapp.com",
    projectId: "facebook-clone-b7a5b",
    storageBucket: "facebook-clone-b7a5b.appspot.com",
    messagingSenderId: "694776796837",
    appId: "1:694776796837:web:c3252779b136ef82a8df4c",
    measurementId: "G-0KZNVC47M0"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider(); 

export {auth , provider};

export default db;
