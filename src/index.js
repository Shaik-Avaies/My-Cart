import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import * as firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA8Ase0jqsbGmCLFLj7EvnwbFB1TMVol8s",
  authDomain: "cart-83b27.firebaseapp.com",
  databaseURL: "https://cart-83b27.firebaseio.com",
  projectId: "cart-83b27",
  storageBucket: "cart-83b27.appspot.com",
  messagingSenderId: "128385953633",
  appId: "1:128385953633:web:73d38ec6d62ddb602e9f20"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
