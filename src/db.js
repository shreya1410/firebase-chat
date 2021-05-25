import firebase from "firebase/app";
import "firebase/database";

const config ={
    apiKey: "AIzaSyA6CCmFoSDfMJIqpwBNvPNuMQeqOVfw3oo",
    authDomain: "firevuechat-c526a.firebaseapp.com",
    projectId: "firevuechat-c526a",
    storageBucket: "firevuechat-c526a.appspot.com",
    messagingSenderId: "885294482222",
    appId: "1:885294482222:web:9bb6600070916c70e5f0bf"
}

const db = firebase.initializeApp(config);
export  default db;