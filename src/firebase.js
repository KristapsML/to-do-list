import firebase from "firebase"
import firebase / firestore from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyDQcB4NR2MFNDSgkADL7vbNFAx3gXVOZ1E",
    authDomain: "to-do-list-661b6.firebaseapp.com",
    databaseURL: "https://to-do-list-661b6.firebaseio.com",
    projectId: "to-do-list-661b6",
    storageBucket: "to-do-list-661b6.appspot.com",
    messagingSenderId: "467465108582",
    appId: "1:467465108582:web:fa7eef4d706be872ec01a7",
    measurementId: "G-T56F43KR5M"
};

const firebaseApp = firebase.initializeApp(config);

const firestore = firebaseApp.firestore();
firestore.settings({
    timestampsInSnapshots: true
})

export default firestore