import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyA2qh8i8sPafw4BNsXI5nTMiQ9P7cX4iks",
  authDomain: "restaurantapp-81bc4.firebaseapp.com",
  databaseURL: "https://restaurantapp-81bc4-default-rtdb.firebaseio.com",
  projectId: "restaurantapp-81bc4",
  storageBucket: "restaurantapp-81bc4.appspot.com",
  messagingSenderId: "723314940050",
  appId: "1:723314940050:web:25553769881ef645bf2e4b"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);
export { app, firestore, storage }