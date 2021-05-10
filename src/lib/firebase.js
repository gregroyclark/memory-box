import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBJgeF_GFt5eWJeZCShQMBaCW2KwQCTFjM",
  authDomain: "memory-box-92bbc.firebaseapp.com",
  projectId: "memory-box-92bbc",
  storageBucket: "memory-box-92bbc.appspot.com",
  messagingSenderId: "178301832482",
  appId: "1:178301832482:web:0113c567a960805897e97b",
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };
