import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCdX6dxGgDZj-jcl2cZsqMWRg1PFx_EtbQ",
    authDomain: "olx-clone-e7e43.firebaseapp.com",
    projectId: "olx-clone-e7e43",
    storageBucket: "olx-clone-e7e43.appspot.com",
    messagingSenderId: "671147280030",
    appId: "1:671147280030:web:c8594302e6c6a5795b5d8f",
    measurementId: "G-HTYR5F6XDX"
  };

export default firebase.initializeApp(firebaseConfig)