import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyALNDzJVY659HUPmbk9FTdJ8vouAY-GQIs",
    authDomain: "discord-clone-redux-cdba8.firebaseapp.com",
    projectId: "discord-clone-redux-cdba8",
    storageBucket: "discord-clone-redux-cdba8.appspot.com",
    messagingSenderId: "315326595686",
    appId: "1:315326595686:web:d84a9593cab69b9a7623a7",
    measurementId: "G-6CEJ5C7SR4"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;