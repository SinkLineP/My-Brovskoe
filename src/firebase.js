import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCYg_RG67Mnia821HkfIQ0Zh51Y4lLEyOQ",
  authDomain: "auth-production-bc56c.firebaseapp.com",
  projectId: "auth-production-bc56c",
  storageBucket: "auth-production-bc56c.appspot.com",
  messagingSenderId: "718219070159",
  appId: "1:718219070159:web:efbea841d4a7c8ae0745ba",
}

const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();
export default app;
