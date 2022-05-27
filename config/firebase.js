import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCYSKC8nU6X0HSOHJS4DGEK2i1r0KOPQz8",
  authDomain: "marvel-search-9cdf1.firebaseapp.com",
  projectId: "marvel-search-9cdf1",
  storageBucket: "marvel-search-9cdf1.appspot.com",
  messagingSenderId: "568882294117", 
  appId: "1:568882294117:web:f9605ddfaebfca6887458c"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth()