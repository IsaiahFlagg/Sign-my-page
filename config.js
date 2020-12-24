const firebaseConfig = {
    apiKey: "AIzaSyDcVqdGXwWAHOVi380tCQ_aw15UIv4yJUo",
    authDomain: "signmywebsite.firebaseapp.com",
    databaseURL: "https://signmywebsite-default-rtdb.firebaseio.com",
    projectId: "signmywebsite",
    storageBucket: "signmywebsite.appspot.com",
    messagingSenderId: "287701678402",
    appId: "1:287701678402:web:5b5a68e91b0264d35470db",
    measurementId: "G-W1F58QK3V4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  //variable to reference the database
  let database = firebase.database();