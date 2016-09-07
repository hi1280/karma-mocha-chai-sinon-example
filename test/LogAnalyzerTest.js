var assert = chai.assert;

suite("LogAnalyzer suite",function(){
  test("load method throw exception", function() {
    var logLoader = new LogLoader();
    sinon.stub(logLoader, "load").throws("load exception");
    var sut = new LogAnalyzer(logLoader);
    assert.throws(function(){sut.analyze("test");},Error,"load exception");
  });
});
