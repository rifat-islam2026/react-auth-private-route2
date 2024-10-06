// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth/cordova";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB9VvhMUwG6LVmEyTHifelFOA7465gIYjo",
    authDomain: "react-auth-private-route2.firebaseapp.com",
    projectId: "react-auth-private-route2",
    storageBucket: "react-auth-private-route2.appspot.com",
    messagingSenderId: "313985111319",
    appId: "1:313985111319:web:e782f57da1e12687e11352"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;