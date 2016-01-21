var breakDown = function(number) {
  var romanThousands = [];


  if (number >= 1000) {
    var thousands = Math.floor(number / 1000);
    var remainder = number % 1000;
    console.log(thousands);
    console.log(remainder);
    for (var i=0; i < thousands; i++) {
      romanThousands.push("M");
    }
  }
  return romanThousands;
}
