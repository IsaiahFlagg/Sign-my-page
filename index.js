
let initialValue = 0;
let clickCount = initialValue;
let signatures = [];

database.ref('/count').on('value', function (snapshot) {

  if (snapshot.child(`clickCount`).exists()) {
    // Set the variables for highBidder/highPrice equal to the stored values.
    clickCount = snapshot.val().clickCount;


    console.log(snapshot.val());
    clickCount = snapshot.val().clickCount;
    // console.log(clickCount);
    $('#countValue').text(clickCount)
  }
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

database.ref('/users').on('value', function (snapshot) {

  if (snapshot.child(`signatures`).exists()) {
    // Set the variables for highBidder/highPrice equal to the stored values.
    console.log(snapshot.val());
    signatures = snapshot.val().signatures;

    for (let i = 0; i < signatures.length; i++) {
      let user = $('<p>').attr('id', `user-${i+1}`).html(`${i+1}) ${signatures[i]}<hr/>`)

      $(".signedUsers").prepend(user);
    }
    
   
  }
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});


$("#countBtn").on("click", function () {

  clickCount++;


  database.ref('/count').set({
    clickCount: clickCount
  });

  console.log(clickCount);
  $("#countValue").text(clickCount);

});
$("#signBtn").on("click", function () {

  let signersName = $('#signersName').val().trim(); 
  signatures.push(signersName);
  $('#signersName').val("");
  console.log(signatures);
  


  database.ref('/users').set({
    signatures: signatures
  });


  

});