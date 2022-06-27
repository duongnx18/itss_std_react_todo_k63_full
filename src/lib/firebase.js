import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD_EnRhPF2mEBPHRw2fsTi6LQQ-qU1FIUA",
  authDomain: "fir-sample-67f75.firebaseapp.com",
  projectId: "fir-sample-67f75",
  storageBucket: "fir-sample-67f75.appspot.com",
  messagingSenderId: "913244459292",
  appId: "1:913244459292:web:4b34066f921f0d2e5fead9"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()

export default db