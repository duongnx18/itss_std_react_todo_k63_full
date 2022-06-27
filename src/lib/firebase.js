import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCzXAmdHHm9RL6aTv1_ByngvkDn-TuYWOE",
  authDomain: "fir-sample-38470.firebaseapp.com",
  projectId: "fir-sample-38470",
  storageBucket: "fir-sample-38470.appspot.com",
  messagingSenderId: "1085382287989",
  appId: "1:1085382287989:web:adfcd41edbc4a034b50e3c"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()

export default db