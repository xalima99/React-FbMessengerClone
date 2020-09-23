import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyDH97rp66FiQy0H8R1z4QiGjYZuiavrgAA",
    authDomain: "mymess-81421.firebaseapp.com",
    databaseURL: "https://mymess-81421.firebaseio.com",
    projectId: "mymess-81421",
    storageBucket: "mymess-81421.appspot.com",
    messagingSenderId: "289804042521",
    appId: "1:289804042521:web:00460245ec965d3f190588",
    measurementId: "G-8DEM0D64L2"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
export const timestamp = firebase.firestore.FieldValue.serverTimestamp()

export {auth, provider};
export default db;