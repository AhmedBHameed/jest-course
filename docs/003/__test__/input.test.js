const filterName = require("../input");

/**
 * filterName function
 * [1] Check if name is empty
 * [2] Should trim spaces
 * [3] Return only 11 characters
 * [4] Should remove underscore
 */

describe("Validate the input field", () => {
  it("Check if name is empty", () => {
    expect(filterName()).toBe("Unknown");
  });

  it("Should trim spaces", () => {
    expect(filterName("  Ahmed  ")).toBe("Ahmed");
  });

  it("Return only 11 characters", () => {
    expect(filterName("Ahmed-Buraa-Hameed")).toBe("Ahmed-Buraa");
  });

  it("Should remove underscore", () => {
    expect(filterName("Ahmed_Buraa_Hameed")).toBe("Ahmed Buraa");
  });
});
