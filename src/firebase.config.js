import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyA65JNaBc1Wip_HBWrWO6gcTrwA7Nr2yfE",
    authDomain: "pokerweb-dev.firebaseapp.com",
    projectId: "pokerweb-dev",
    storageBucket: "pokerweb-dev.appspot.com",
    messagingSenderId: "143804065980",
    appId: "1:143804065980:web:dd50df71b2256db58f88b9",
    measurementId: "G-XCBH64LKKL"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebase.firestore();
  export default db