var assert = chai.assert;

suite("MonthlyCalendar suite",function(){
  test("2012/1/31 is 0", function() {
    var sut = new MonthlyCalendar(new Date("2012-01-31"));
    assert.equal(sut.getRemainingDays(), 0);
  });
  test("2012/1/30 is 1", function() {
    var sut = new MonthlyCalendar(new Date("2012-01-30"));
    assert.equal(sut.getRemainingDays(), 1);
  });
  test("2012/2/1 is 29", function() {
    var sut = new MonthlyCalendar(new Date("2012-02-01"));
    assert.equal(sut.getRemainingDays(), 28);
  });
});