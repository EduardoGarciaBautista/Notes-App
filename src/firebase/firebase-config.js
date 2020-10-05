import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/firebase-auth';

const firebaseConfig = {
    apiKey: "AIzaSyB1Zk9K4olsSwmjajnj1StP8vwtPPzwNS4",
    authDomain: "notes-app-f0842.firebaseapp.com",
    databaseURL: "https://notes-app-f0842.firebaseio.com",
    projectId: "notes-app-f0842",
    storageBucket: "notes-app-f0842.appspot.com",
    messagingSenderId: "80033619381",
    appId: "1:80033619381:web:720fc4c2e3dc39b7338dfc"
};


firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
};