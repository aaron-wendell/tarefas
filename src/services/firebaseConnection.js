import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
  apiKey: "AIzaSyCMWtbmOFyARK48DG3JOm4mN523636hHVU",
  authDomain: "tarefas-85b4b.firebaseapp.com",
  databaseURL: "https://tarefas-85b4b-default-rtdb.firebaseio.com",
  projectId: "tarefas-85b4b",
  storageBucket: "tarefas-85b4b.appspot.com",
  messagingSenderId: "454142939533",
  appId: "1:454142939533:web:e576d868b90a51aa47edc4",
  measurementId: "G-D5JBM8WTGR"
};


if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}

export default firebase;

