import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDEsZAbpgupFAOlRbC-lq9Ald_QZu1IGEA",
    authDomain: "carbon-dating-d97a8.firebaseapp.com",
    projectId: "carbon-dating-d97a8",
    storageBucket: "carbon-dating-d97a8.appspot.com",
    messagingSenderId: "172992751868",
    appId: "1:172992751868:web:3a5eca1755e75852d14f79",
    measurementId: "G-D60FNFXGKD"
  };

// Initialize Firebase
const initializeAuthentication = () => {
    return initializeApp(firebaseConfig)
}

export default initializeAuthentication;