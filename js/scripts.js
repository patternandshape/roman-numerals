var breakDown = function(number) {
  var romanBases = ["M", "D", "C", "L", "X", "V", "I"];
  var arabicBases = [1000,500,100,50,10,5,1];
  var romanNumeral = '';

  for (var i=0; i < romanBases.length ; i++) {
    if (number >= arabicBases[i]) {
      var quantity = Math.floor(number / arabicBases[i]);
      var remainder = number % arabicBases[i];
      number = remainder;
      for (var j = 0; j < quantity; j++) {
        romanNumeral = romanNumeral + romanBases[i];
      }
    }
  }
  return romanNumeral;
}

var moreThanThree = function(numeral) {
  var romanBases = ["M", "D", "C", "L", "X", "V", "I"];
  return numeral;
}

var romanConverter = function(number){
  if (number > 3999) {
    return "error";
  }
  var rawNumerals = breakDown(number);
  if (rawNumerals.includes('IIII') || rawNumerals.includes('XXXX') || rawNumerals.includes('CCCC')) {
    var numerals = moreThanThree(rawNumerals);
  } else {
    var numerals = rawNumerals;
  }
  return numerals;
}
// END BUSINESS LOGIC

$(document).ready(function() {
  $("form#inputForm").submit(function(event) {
    event.preventDefault();
    var arabicNumber = parseInt($("#inputNumber").val());
    var romanNumber = romanConverter(arabicNumber);
    //window.location.href ="disemvowelled.html";
    $(".output").text(romanNumber);
    //alert(endPhrase);


  });
});
