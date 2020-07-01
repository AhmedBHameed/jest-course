const sum = require("../sum");

/**
 * test(name, fn, timeout)
 * it(name, fn, timeout)
 * describe(name, fn) =>> used to organize all tests
 */

describe("Test sum function", () => {
  describe.only("Check if no number passed or one number only", () => {
    it("Should return 0 if no argument passed.", () => {
      expect(sum()).toBe(0);
    });

    it.skip("Should return number", () => {
      expect(sum(10)).toBe(10);
    });
  });

  describe("For more than one number", () => {
    it("Should sum 15 + 15 and return 30", () => {
      expect(sum(15, 15)).toBe(30);
    });

    it("Should sum 15 + 15 + 10 and return 40", () => {
      expect(sum(15, 15, 10)).toBe(40);
    });

    it("Should sum all number(s)", () => {
      expect(sum(15, 15, 10, 10, 20, 50)).toBe(120);
    });
  });
});

// console.log(
//   [].reduce((previousValue, currentValue) => previousValue + currentValue, 0)
// );
