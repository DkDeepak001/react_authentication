import firebase from "firebase/compat/app";
import "firebase/compat/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBwZbNLrp94dOxQRKwLD9T9eISrGrk9VM4",
    authDomain: "react-authentication-2bf1c.firebaseapp.com",
    projectId: "react-authentication-2bf1c",
    storageBucket: "react-authentication-2bf1c.appspot.com",
    messagingSenderId: "43871633607",
    appId: "1:43871633607:web:6930412f88112edde53ee2"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const auth = firebaseApp.auth();
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const fbProvider = new firebase.auth.FacebookAuthProvider();
//   const GithubProvider = new firebase.auth.GithubProvider();

  export {auth,googleProvider,fbProvider}