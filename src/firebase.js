import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

const config = {
    apiKey: "AIzaSyC1DWTMGN9WjLHmhk_ne3ohTT-JMgHGSxs",
    authDomain: "react-midterm.firebaseapp.com",
    projectId: "react-midterm",
    storageBucket: "react-midterm.appspot.com",
    messagingSenderId: "370350833045",
    appId: "1:370350833045:web:739005f9e53ea1f3dd0a9c"
};
firebase.initializeApp(config);

const storage = firebase.storage();

export { storage, firebase as default};
