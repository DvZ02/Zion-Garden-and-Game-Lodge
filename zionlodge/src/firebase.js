// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBgogq6pZm8EAQbtzXvWlsCzqezyDFW8qE',
  authDomain: 'zion-garden-and-game-lodge.firebaseapp.com',
  projectId: 'zion-garden-and-game-lodge',
  storageBucket: 'zion-garden-and-game-lodge.appspot.com',
  messagingSenderId: '234284517085',
  appId: '1:234284517085:web:bef1a4787fea2a9d903d34',
  measurementId: 'G-CKVN1PQB8X'
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };