import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyB-YvYzEKfSRkHDAY_YC_T1acw50S94N0k",
  authDomain: "plugsr-8cb48.firebaseapp.com",
  projectId: "plugsr-8cb48",
  storageBucket: "plugsr-8cb48.appspot.com",
  messagingSenderId: "407234155593",
  appId: "1:407234155593:web:6cc0c3e5f3f409ae611b98"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)