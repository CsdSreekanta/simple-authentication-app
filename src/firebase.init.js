import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCTP7d0CbEsFpjyIyH9y4JFWY9ogn7uBqA",
    authDomain: "simple-authentication-ap-f6e15.firebaseapp.com",
    projectId: "simple-authentication-ap-f6e15",
    storageBucket: "simple-authentication-ap-f6e15.appspot.com",
    messagingSenderId: "512345081427",
    appId: "1:512345081427:web:bdecf8d7e9adddd10ca8a6"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  export default app;