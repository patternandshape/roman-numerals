var breakDown = function(number) {
  var romanThousands = [];
  var romanFiveHundreds = [];

  if (number >= 1000) {
    var thousands = Math.floor(number / 1000);
    var remainder = number % 1000;
    number = remainder;
    for (var i=0; i < thousands; i++) {
      romanThousands.push("M");
    }
    return romanThousands;
  }

  if (number >= 500) {
    var fiveHundreds = Math.floor(number / 500);
    var remainder = number % 500;
    number = remainder;
    for (var i=0; i < fiveHundreds; i++) {
      romanFiveHundreds.push("D");
    }
    return romanFiveHundreds;
  }


}
