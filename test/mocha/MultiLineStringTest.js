var assert = chai.assert;

suite("MultiLineString suite",function(){
  test("MultiLineString test", function() {
    var expected = "Hello\nWorld\nHello\nWorld\nHello\nWorld\n"; 
    assert.deepEqual(MultiLineString.join("Hello","World","Hello","World","Hello","World"),expected);
  });
});
