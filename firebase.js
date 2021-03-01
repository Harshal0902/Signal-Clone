import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbZyAWHDgyz30josplNsuZqa5dEcXc4KY",
  authDomain: "signal-6c1ba.firebaseapp.com",
  projectId: "signal-6c1ba",
  storageBucket: "signal-6c1ba.appspot.com",
  messagingSenderId: "712876803279",
  appId: "1:712876803279:web:3f1d8075ec25bdf7ab23ba"
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
}

else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };