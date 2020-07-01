const allData = require("../all");

test("Check if array contain 6 elements", () => {
  expect(allData.length).toBe(5);
});

test("Check if array contain 6 elements but with different method", () => {
  expect(allData).toHaveLength(5);
});

test("Check if array contain number 4", () => {
  expect(allData).toContain(4);
});

test("Check if array contain only number [1st method]", () => {
  for (let i = 0; i < allData.length; i++) {
    expect(isNaN(allData[i])).toBe(false);
  }
});

test("Check if array contain only number [2nd method]", () => {
  for (let i = 0; i < allData.length; i++) {
    expect(isNaN(allData[i])).toBeFalsy();
  }
});

test("Check if array contain only number [3rd method]", () => {
  for (let i = 0; i < allData.length; i++) {
    expect(isNaN(allData[i])).not.toBeTruthy();
  }
});

test("Check if array first element is larger than 0", () => {
  expect(allData[0]).toBeGreaterThanOrEqual(1);
});

test("Check if array first element is less than 10", () => {
  expect(allData[0]).toBeLessThanOrEqual(10);
});

test("Check for undefined", () => {
  expect(allData[10]).toBeUndefined();
});

test("Check for substring inside string by RegExp", () => {
  let myString = "I love Jest";
  expect(myString).toMatch(/Jest/);
});

test("Check for property age", () => {
  let myObject = {
    name: "Ahmed",
    age: 30,
  };
  expect(myObject).toHaveProperty("age");
});

test("Check for property age that have value of 30", () => {
  let myObject = {
    name: "Ahmed",
    age: 30,
  };
  expect(myObject).toHaveProperty("age", 30);
});
