import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDv8GqZmsMFbVoGe9jTi_PgQsT7QRrTuyA",
    authDomain: "makers-auth.firebaseapp.com",
    projectId: "makers-auth",
    storageBucket: "makers-auth.appspot.com",
    messagingSenderId: "852263840026",
    appId: "1:852263840026:web:0f75cb2d6fc44cb625a4a3"
  };

  const fire = firebase.initializeApp(firebaseConfig);
  
  export default fire;
  
