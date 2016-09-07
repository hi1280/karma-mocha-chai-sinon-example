var assert = chai.assert;

suite("NetworkResources suite",function(){
  test("load test", function() {
    let expected = "Hello World";
    var loader = new NetworkLoader();
    sinon.stub(loader, "getInput").returns({read:function(){return expected;}});
    var sut = new NetworkResources(loader);
    assert.equal(sut.load(),expected);
  });
});
