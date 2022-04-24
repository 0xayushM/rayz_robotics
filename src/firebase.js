import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCeTfB-rtAoppjmkVY32l2giVU6W5qeWbY",
  authDomain: "rayz-14795.firebaseapp.com",
  databaseURL: "https://rayz-14795-default-rtdb.firebaseio.com",
  projectId: "rayz-14795",
  storageBucket: "rayz-14795.appspot.com",
  messagingSenderId: "482587548211",
  appId: "1:482587548211:web:e3023ba6b59e23f1f5e146",
};

const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
