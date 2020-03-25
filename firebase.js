import firebase from 'firebase';
  const BD_CONFIG = {
    apiKey: "AIzaSyD2QzAe-t_PAg19ILfbE9Im-AubEFRCpRM",
    authDomain: "fir-notes-2aeb6.firebaseapp.com",
    databaseURL: "https://fir-notes-2aeb6.firebaseio.com",
    projectId: "fir-notes-2aeb6",
    storageBucket: "fir-notes-2aeb6.appspot.com",
    messagingSenderId: "242842310740",
    appId: "1:242842310740:web:1ba2b9b7143b5553ff35c1",
    measurementId: "G-B17WZGDPKQ"
 
} 
 const fire =  firebase.initializeApp(BD_CONFIG);
 export default fire;

  
