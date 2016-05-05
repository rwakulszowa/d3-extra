var tape = require("tape"),
    extras = require("../");

tape("foo() returns the answer to the ultimate question of life, the universe, and everything.", function(test) {
  test.equal(extras.foo(), 42);
  test.end();
});
