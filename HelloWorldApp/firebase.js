// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage'; // If you plan to use Firebase Storage

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAdj4n_V_MlGUTO3XzqGq1sE1bR9wCx9k8',
  authDomain: 'cs184hw2-17668.firebaseapp.com',
  projectId: 'cs184hw2-17668',
  storageBucket: 'cs184hw2-17668.appspot.com',
  messagingSenderId: '287106691468',
  appId: '1:287106691468:web:b71e9d0b68b379a99da6a9',
  measurementId: 'G-JYDBJB1JTK', // This can be removed if not using analytics in a React Native context
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app); // Include this if you need Firebase Storage

export { auth, db, storage };
