
//ADD YOUR FIREBASE LINKS
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDmIpJ5uUsqMPakOfsSbWmWRachnav-KIM",
    authDomain: "kwitter-940c3.firebaseapp.com",
    databaseURL: "https://kwitter-940c3-default-rtdb.firebaseio.com",
    projectId: "kwitter-940c3",
    storageBucket: "kwitter-940c3.appspot.com",
    messagingSenderId: "990285554031",
    appId: "1:990285554031:web:d65b083b60bb76714b089a"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function AddUser(){
      user_name=document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          name: "error 404"
      });
  }