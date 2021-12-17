
import { initializeApp } from "@firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA-oDVAeegQZnjKSUGAXNcj8s1azKUbvdY",
  authDomain: "georgia-grace-design-collab.firebaseapp.com",
  projectId: "georgia-grace-design-collab",
  storageBucket: "georgia-grace-design-collab.appspot.com",
  messagingSenderId: "368830510902",
  appId: "1:368830510902:web:3d063c9bdac3ae4e9fa597",
  measurementId: "G-7E6317HDFN"
};

console.info('Initializing FB App')

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)