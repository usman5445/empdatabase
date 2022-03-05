import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxKs1lMFWwz6NRtJiGrzTqLywM2hY3yE0",
  authDomain: "empdata-85fe8.firebaseapp.com",
  databaseURL: "https://empdata-85fe8-default-rtdb.firebaseio.com",
  projectId: "empdata-85fe8",
  storageBucket: "empdata-85fe8.appspot.com",
  messagingSenderId: "800632926234",
  appId: "1:800632926234:web:09e5306bc9c1029985a1a3",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
