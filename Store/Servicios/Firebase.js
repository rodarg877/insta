import * as firebase  from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCFt9pptyrcDK_9xgynaHr773W1_z6YxZU",
    authDomain: "clone-insta-41ce0.firebaseapp.com",
    databaseURL: "https://clone-insta-41ce0.firebaseio.com",
    projectId: "clone-insta-41ce0",
    storageBucket: "clone-insta-41ce0.appspot.com",
    messagingSenderId: "428760541745",
    appId: "1:428760541745:web:4bd64a609bb750ad814310",
    measurementId: "G-DBD311R755"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics(); 

  export const autenticacion =  firebase.auth(); 
  export const baseDeDatos =  firebase.database(); 