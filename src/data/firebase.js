import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCLyp3Ki12JLMoGjVMAwUxDDSGR5V_DR2s",
  authDomain: "rog-shop-ecommerce.firebaseapp.com",
  projectId: "rog-shop-ecommerce",
  storageBucket: "rog-shop-ecommerce.appspot.com",
  messagingSenderId: "493115280252",
  appId: "1:493115280252:web:befd103097fa62c52472f9"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export default db
