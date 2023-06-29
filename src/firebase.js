import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyABsrJv2alPEWTJEF-APlJCCLaCqu5ORbI",
  authDomain: "rushapp-3807a.firebaseapp.com",
  projectId: "rushapp-3807a",
  storageBucket: "rushapp-3807a.appspot.com",
  messagingSenderId: "1021437150568",
  appId: "1:1021437150568:web:dabbcda105cbe7634cc2dd"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();