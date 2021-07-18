import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCgxrJFzgThi4kCK0wvllNL3ixPqONPPIQ",
    authDomain: "eaccounting-84fb1.firebaseapp.com",
    projectId: "eaccounting-84fb1",
    storageBucket: "eaccounting-84fb1.appspot.com",
    messagingSenderId: "129443881227",
    appId: "1:129443881227:web:fe9b65d6c1bbcb81b9420e",
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;