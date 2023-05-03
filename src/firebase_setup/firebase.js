// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAOqs6stsvXdA7mVonxBcMoC4VAX8A-EXs",
    authDomain: "cps714-fitin.firebaseapp.com",
    projectId: "cps714-fitin",
    storageBucket: "cps714-fitin.appspot.com",
    messagingSenderId: "270370090981",
    appId: "1:270370090981:web:1519c8b6a103a089a2c90c",
    measurementId: "G-D1QZ1CNTLX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);