import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBL682QFPRPmWLheJpau37CTLVYV-Y64bE",
  authDomain: "js17-99d8d.firebaseapp.com",
  projectId: "js17-99d8d",
  storageBucket: "js17-99d8d.appspot.com",
  messagingSenderId: "666484217868",
  appId: "1:666484217868:web:6934af2eae8949961fb629",
};
export const fire = firebase.initializeApp(firebaseConfig);
export default fire;
