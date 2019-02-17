//Use RegEx to validate form

document.getElementById("submit").addEventListener("click", function() {
  var inputFields = document.getElementsByTagName("input");

  for (var i = 0; i < inputFields.length; i++) {
    var theInput = inputFields[i].value;
    console.log(theInput);

    var thePatterns = new RegExp(inputFields[i].pattern);
    var theTests = thePatterns.test(theInput);
    console.log(theTests);

    if (theTests === false) {
      console.log(
        inputFields[i].name + " is incorrect, please type valid data"
      );
    }
  }
});
