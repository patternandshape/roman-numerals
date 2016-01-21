describe ("breakDown", function(){
  // it("Will convert ones to Roman bases", function() {
  //   expect(breakDown(1)).to.eql(["I"]);
  // });
  //
  // it("Will convert fives to Roman bases", function() {
  //   expect(breakDown(5)).to.eql(["V"]);
  // });
  //
  // it("Will convert tens to Roman bases", function() {
  //   expect(breakDown(10)).to.eql(["C"]);
  // });
  //
  // it("Will convert fifties to Roman bases", function() {
  //   expect(breakDown(50)).to.eql(["L"]);
  // });
  //
  // it("Will convert hundreds to Roman bases", function() {
  //   expect(breakDown(100)).to.eql(["C"]);
  // });
  //
  it("Will convert five hundreds to Roman bases", function() {
    expect(breakDown(500)).to.eql(["D"]);
  });

  it("Will convert thousands to Roman bases", function() {
    expect(breakDown(2000)).to.eql(["M", "M"]);
  });

  it("Will convert input to Roman bases", function() {
    expect(breakDown(1666)).to.eql(["M", "D", "C", "L", "X", "V", "I"]);
  });

});
