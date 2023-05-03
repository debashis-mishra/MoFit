// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyA0VpKmhQsdBxq-FbmpYDM0EwidiLpvaGo",
	authDomain: "fit-app-47758.firebaseapp.com",
	projectId: "fit-app-47758",
	storageBucket: "fit-app-47758.appspot.com",
	messagingSenderId: "900684064050",
	appId: "1:900684064050:web:f7a1eb01e39dd8b21ee32b",
	measurementId: "G-6WWVJV3ZQQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
const provider = new GoogleAuthProvider();

export { auth, provider, storage, db, app };
