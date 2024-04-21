import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB8IpJGzel6i-ARqFMcg9dW27nmTLcoRsY",
  authDomain: "nextcoderdurelli.firebaseapp.com",
  projectId: "nextcoderdurelli",
  storageBucket: "nextcoderdurelli.appspot.com",
  messagingSenderId: "40526116736",
  appId: "1:40526116736:web:85ef0be0a29c1f15cd7365"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
