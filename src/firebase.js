// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFKfpa-AbuxKmOn1RB3eMHlyKbmQbfUm4",
  authDomain: "linkdin-f6133.firebaseapp.com",
  databaseURL: "https://linkdin-f6133-default-rtdb.firebaseio.com",
  projectId: "linkdin-f6133",
  storageBucket: "linkdin-f6133.appspot.com",
  messagingSenderId: "520197686163",
  appId: "1:520197686163:web:96752926a7ecbc0366de66"
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseapp);
const auth = getAuth(firebaseapp);
// export {firebaseapp,db,auth};
export { auth, db };

