import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0X0t_aVWO4YAocd5Km93bLmOjbUozl9k",
  authDomain: "rog-shop-ecommerce-coder.firebaseapp.com",
  projectId: "rog-shop-ecommerce-coder",
  storageBucket: "rog-shop-ecommerce-coder.appspot.com",
  messagingSenderId: "244086785079",
  appId: "1:244086785079:web:39c5a03e0f4531b7f7ebb2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const db = getFirestore(app);
 export default db