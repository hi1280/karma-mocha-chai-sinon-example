var assert = chai.assert;

suite("ItemStock suite at Initial",function(){
  var sut = null;
  var book = null;
  setup(function(){
    sut = new ItemStock();
    book = new Item("book",3800);
  });
  test("getNum is 0 at initial", function() {
    assert.equal(sut.getNum(book),0);
  });
  test("getNum is 0 at illegal args", function() {
    assert.equal(sut.getNum(),0);
  });
});

suite("ItemStock suite after add Item",function(){
  var sut = null;
  var book = null;
  setup(function(){
    sut = new ItemStock();
    book = new Item("book",3800);
    sut.add(book);
  });
  test("getNum is 1 after add Item", function() {
    assert.equal(sut.getNum(book),1);
  });
  test("getNum is 2 after add same Item", function() {
    sut.add(book);
    assert.equal(sut.getNum(book),2);
  });
  test("getNum is 1 after add different Item", function() {
    var bike = new Item("bike",57000);
    sut.add(bike);
    assert.equal(sut.getNum(book),1);
  });
});