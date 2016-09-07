var assert = chai.assert;

suite("increment suite",function(){
  test("get 1 at initial", function() {
    c = new Counter();
    assert.equal(c.increment(),1);
  });
  test("get 2 at run increment method", function() {
    c = new Counter();
    c.increment();
    assert.equal(c.increment(),2);
  });
  test("get 51 at run increment method 50 times", function() {
    c = new Counter();
    for(var i =0; i < 50; i++){
      c.increment();
    }
    assert.equal(c.increment(),51);
  });
});