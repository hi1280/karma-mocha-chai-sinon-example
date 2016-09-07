var assert = chai.assert;

suite("ConsumptionTax suite dynamically",function(){
  var tests = [
    {taxRate:5,price:100,expected:105},
    {taxRate:5,price:3000,expected:3150},
    {taxRate:10,price:50,expected:55},
    {taxRate:5,price:50,expected:52},
    {taxRate:3,price:50,expected:51},
  ];

  tests.forEach(function(tst){
    test(tst.price +" is "+ tst.expected +" in consumption tax. If the tax rate of "+ tst.taxRate +"%", function(){
      var sut = new ConsumptionTax(tst.taxRate);
      assert.equal(sut.apply(tst.price),tst.expected);
    });
  });
});