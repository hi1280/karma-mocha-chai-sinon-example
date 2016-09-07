var assert = chai.assert;

suite("Authentication suite",function(){
  test("not exist account", function() {
    var sut = new Authentication();
    var dao = new AccountDao();
    sinon.stub(dao, "findOrNull").returns(null);
    sut.dao = dao;
    assert.equal(sut.authenticate("user001","pw123"),null);
  });
  test("exist account and equal password", function() {
    var sut = new Authentication();
    var dao = new AccountDao();
    var account = new Account("user001","pw123");
    sinon.stub(dao, "findOrNull").returns(account);
    sut.dao = dao;
    assert.equal(sut.authenticate("user001","pw123"),account);
  });
  test("exist account and not equal password", function() {
    var sut = new Authentication();
    var dao = new AccountDao();
    var account = new Account("user001","pw999");
    sinon.stub(dao, "findOrNull").returns(account);
    sut.dao = dao;
    assert.equal(sut.authenticate("user001","pw123"),null);
  });
});
