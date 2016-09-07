var assert = chai.assert;

suite("isEven suite",function(){
  test("is even", function() {
    assert.equal(NumberUtils.isEven(10),true);
  });
  test("is not even", function() {
    assert.equal(NumberUtils.isEven(7),false);
  });
});
