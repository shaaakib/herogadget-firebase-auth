// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDwyMmMTf14CwD8ID6PdI5QwRhWw8A3gvs',
  authDomain: 'hero-gadget-with-firebase.firebaseapp.com',
  projectId: 'hero-gadget-with-firebase',
  storageBucket: 'hero-gadget-with-firebase.appspot.com',
  messagingSenderId: '705762875912',
  appId: '1:705762875912:web:f0c06aff153685c25f8fbd',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
