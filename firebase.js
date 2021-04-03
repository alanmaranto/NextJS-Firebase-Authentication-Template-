import firebase from "firebase/app";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyDO4JIZZ5cUxPda3OmtP1vwDDtmevjux34",
  authDomain: "auth-4c030.firebaseapp.com",
  projectId: "auth-4c030",
  storageBucket: "auth-4c030.appspot.com",
  messagingSenderId: "166363707807",
  appId: "1:166363707807:web:7c4bb8d7f06c6e0e35a5aa",
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
