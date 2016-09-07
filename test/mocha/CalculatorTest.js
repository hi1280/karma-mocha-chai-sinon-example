var assert = chai.assert;

suite("divide suite",function(){
  test("0 is exception", function() {
    assert.throws(function(){Calculator.divide(1,0);},"y is zero");
  });
});