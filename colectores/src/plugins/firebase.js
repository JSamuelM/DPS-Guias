// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyByiJm3icK-25JWUNJuAO27mpXvtObC2Ko',
  authDomain: 'colector-57ce6.firebaseapp.com',
  projectId: 'colector-57ce6',
  storageBucket: 'colector-57ce6.appspot.com',
  messagingSenderId: '911549422957',
  appId: '1:911549422957:web:73bb32f579e22c38e74e64',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;