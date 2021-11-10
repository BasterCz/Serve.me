import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDUh6nxzf1KO8OvZVQBXUX9FrehYu7MrTw",
  authDomain: "serve-me-6209f.firebaseapp.com",
  projectId: "serve-me-6209f",
  storageBucket: "serve-me-6209f.appspot.com",
  messagingSenderId: "163903608078",
  appId: "1:163903608078:web:a1a887a26a89739625335f"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default getFirestore();