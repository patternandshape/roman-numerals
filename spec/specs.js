describe ("breakDown", function(){
  it("Will convert ones to Roman bases", function() {
    expect(breakDown(1)).to.equal("I");
  });

  it("Will convert fives to Roman bases", function() {
    expect(breakDown(5)).to.equal("V");
  });

  it("Will convert tens to Roman bases", function() {
    expect(breakDown(10)).to.equal("X");
  });

  it("Will convert fifties to Roman bases", function() {
    expect(breakDown(50)).to.equal("L");
  });

  it("Will convert hundreds to Roman bases", function() {
    expect(breakDown(100)).to.equal("C");
  });

  it("Will convert five hundreds to Roman bases", function() {
    expect(breakDown(500)).to.equal("D");
  });

  it("Will convert thousands to Roman bases", function() {
    expect(breakDown(2000)).to.equal("MM");
  });

  it("Will convert input to Roman bases", function() {
    expect(breakDown(1666)).to.equal("MDCLXVI");
  });

  it("Will convert complex input to Roman bases", function() {
    expect(breakDown(2777)).to.equal("MMDCCLXXVII");
  });

});

describe ("romanConverter", function(){
  it("Will convert ones to Roman bases", function() {
    expect(romanConverter(9)).to.equal("IX");
  });
});
