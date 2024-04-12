// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";

const REACT_APP_FIREBASE_API_KEY = process.env.REACT_APP_FIREBASE_API_KEY;
const REACT_APP_FIREBASE_API_ID = process.env.REACT_APP_FIREBASE_API_ID;



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGoIB7A3NLxxqEMQJbHiCRS3iUzw-9d1k",
  authDomain: "mct5react-food-delivery-webapp.firebaseapp.com",
  projectId: "mct5react-food-delivery-webapp",
  storageBucket: "mct5react-food-delivery-webapp.appspot.com",
  messagingSenderId: "1061081587239",
  appId: "1:1061081587239:web:00a839c06353625ee1f802",
  measurementId: "G-0ZDKHK74FG"
};
// console.log(firebaseConfig);
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// export default firebase;
const auth=getAuth(firebaseApp);
const FIREBASE_DB = getFirestore(firebaseApp);

export {FIREBASE_DB};
