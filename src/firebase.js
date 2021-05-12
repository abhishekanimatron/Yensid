import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBxnDHY_ed7n3oOAk0AmeMEnlGGK4Gr_6s",
  authDomain: "yensid-ea090.firebaseapp.com",
  projectId: "yensid-ea090",
  storageBucket: "yensid-ea090.appspot.com",
  messagingSenderId: "606068236883",
  appId: "1:606068236883:web:3aa0e3623b318b389edca6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
