var assert = chai.assert;

suite("echo suite",function(){
  test("spec", function() {
    assert.equal(StringUtils.echo("abc"),"abc");
  });
  test("es2015 spec", function() {
    assert.equal(StringUtils_es2015.echo("abc"),"abc");
  });
});

suite("toSnakeCase suite", function() {
  test("aaa is aaa", function() {
    assert.equal(StringUtils_es2015.toSnakeCase("abc"),"abc");
  });
  test("HelloWorld is hello_world", function() {
    assert.equal(StringUtils_es2015.toSnakeCase("HelloWorld"),"hello_world");
  });
  test("practiceJunit is practice_junit", function() {
    assert.equal(StringUtils_es2015.toSnakeCase("practiceJunit"),"practice_junit");
  });
});