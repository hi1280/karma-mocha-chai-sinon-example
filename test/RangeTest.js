var assert = chai.assert;

suite("Range suite dynamically",function(){
  var sut = null;
  setup(function(){
    sut = new Range(0.0, 10.5);
  });

  var tests = [
    {args:-0.1,expected:false},
    {args:0.0, expected:true},
    {args:10.5,expected:true},
    {args:10.6,expected:false}
  ];

  tests.forEach(function(tst){
    test(tst.args + " is " + tst.expected, function(){
      assert.equal(sut.contains(tst.args),tst.expected);
    });
  });
});