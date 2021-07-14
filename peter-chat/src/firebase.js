import firebase from 'firebase/app';
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyClaitEau5Vv-PBvuKI49Sm94s3b64Ir_8",
    authDomain: "soriano-chat-1.firebaseapp.com",
    projectId: "soriano-chat-1",
    storageBucket: "soriano-chat-1.appspot.com",
    messagingSenderId: "220805188890",
    appId: "1:220805188890:web:fd49caebd1845f122df0a3",
    measurementId: "G-FL1K625E8C"
}).auth();