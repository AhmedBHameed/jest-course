/**
 * beforeAll(fn, timeout)
 * beforeEach(fn, timeout)
 */

function check() {
  return 1;
}

beforeAll(() => {
  /**
   * Used with
   * 1- Connect to database.
   * 2- Empty testing table
   * 3- Add dummy data for testing
   * 4- Prepare everything before testing
   */
  expect(check()).toBe(1);
});

afterAll(() => {
  /**
   * Used with
   * 1- Clean database
   * 2- Clean cache
   */
  expect(check()).toBe(1);
});
