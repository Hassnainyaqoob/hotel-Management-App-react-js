import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBCqLDShHy8Ksk7P3Qy7Gt1sSjH3pD8r4s",
    authDomain: "fir-reactappp.firebaseapp.com",
    databaseURL: "https://fir-reactappp-default-rtdb.firebaseio.com",
    projectId: "fir-reactappp",
    storageBucket: "fir-reactappp.appspot.com",
    messagingSenderId: "584041453122",
    appId: "1:584041453122:web:daa66fc940f2cbd0e07fdb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;





