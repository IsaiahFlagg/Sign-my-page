let firebaseConfig = {
    apiKey: "AIzaSyDcVqdGXwWAHOVi380tCQ_aw15UIv4yJUo",
    authDomain: "signmywebsite.firebaseapp.com",
    databaseURL: "https://signmywebsite-default-rtdb.firebaseio.com",
    projectId: "signmywebsite",
    storageBucket: "signmywebsite.appspot.com",
    messagingSenderId: "287701678402",
    appId: "1:287701678402:web:c21376b11d91ebee5470db",
    measurementId: "G-4E2Q188R9N"
  };
  firebase.initializeApp(firebaseConfig);
//variable to reference the database
  let database = firebase.database();
  let initialValue = 0;
  let clickCounter = initialValue;

  database.ref().on('value', function(snapshot) {
      console.log(snapshot.val());
      clickCounter = snapshot.val().clickCount;
      console.log(clickCounter);
      $('#countValue').text(snapshot.val().clickCount)
  }, function(errorObject) {
    console.log("The read failed: " + errorObject.code);
  });

$
