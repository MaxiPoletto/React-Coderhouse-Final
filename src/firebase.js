import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAR7Y8D1GeK7fzPwpru2T4QsJudXNGp5lo",
  authDomain: "app-react-coder.firebaseapp.com",
  projectId: "app-react-coder",
  storageBucket: "app-react-coder.appspot.com",
  messagingSenderId: "59484038129",
  appId: "1:59484038129:web:888d5b35303d4f841e1a50"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

