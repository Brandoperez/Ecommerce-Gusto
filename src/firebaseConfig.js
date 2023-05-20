import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDuyEUKyt1OE1ku7P5Cc8phMLMA-TG7foo",
  authDomain: "ecomerceanclados.firebaseapp.com",
  projectId: "ecomerceanclados",
  storageBucket: "ecomerceanclados.appspot.com",
  messagingSenderId: "705134820815",
  appId: "1:705134820815:web:ecdcc81a06643e7d7ba6ba"
};


const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app);