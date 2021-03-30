import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAF7bgt_hKDk2YNN7YJc8GLjb7DuZv9YWo",
    authDomain: "instagram-clone-react-c65a9.firebaseapp.com",
    projectId: "instagram-clone-react-c65a9",
    storageBucket: "instagram-clone-react-c65a9.appspot.com",
    messagingSenderId: "360868445708",
    appId: "1:360868445708:web:50798e90acc3064def7829",
    measurementId: "G-BVJXQMYZHR"
});

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {db, auth, storage };
