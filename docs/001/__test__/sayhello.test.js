const sayHello = require("../sayHello");

test("Test sayHello function", () => {
  expect(sayHello()).toBe("Hello Jest");
});
