var breakDown = function(number) {
  var romanBases = ["M", "D", "C", "L", "X", "V", "I"];
  var arabicBases = [1000,500,100,50,10,5,1];
  var romanNumeral = [];


  for (var i=0; i < romanBases.length ; i++) {
    if (number >= arabicBases[i]) {
      console.log(i);
      //debugger;
      var quantity = Math.floor(number / arabicBases[i]);
      var remainder = number % arabicBases[i];
      number = remainder;

      for (var j = 0; j < quantity; j++) {
        romanNumeral.push(romanBases[i]);
        console.log(i, quantity, romanNumeral, number);
      }
    }
  }
  return romanNumeral;
}
  // if (number >= 1000) {
  //   var thousands = Math.floor(number / 1000);
  //   var remainder = number % 1000;
  //   number = remainder;
  //   for (var i=0; i < thousands; i++) {
  //     romanThousands.push("M");
  //   }
  //   return romanThousands;
  // }
  //
  // if (number >= 500) {
  //   var fiveHundreds = Math.floor(number / 500);
  //   var remainder = number % 500;
  //   number = remainder;
  //   for (var i=0; i < fiveHundreds; i++) {
  //     romanFiveHundreds.push("D");
  //   }
  //   return romanFiveHundreds;
  // }
