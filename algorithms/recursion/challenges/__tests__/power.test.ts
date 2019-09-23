/* eslint-disable @typescript-eslint/explicit-function-return-type */
import power from "../power";

describe("Power test suite", () => {
  describe("Power test cases for correct values", () => {
    it("should return the correct value based on the input", () => {
      expect(power(6, 2)).toBe(36);
      expect(power(4, 2)).toBe(16);
      expect(power(6, 6)).toBe(46656);
      expect(power(23, 6)).toBe(148035889);
    });
    it("should return the correct values for 0 or 1 inputs to base and exponent", () => {
      expect(power(0, 100)).toBe(0);
      expect(power(1, 1)).toBe(1);
      expect(power(0, 0)).toBe(0);
      expect(power(1, 0)).toBe(1);
    });
  });
  describe("Power test cases for incorrect values", () => {
    it("should return null if either (or both) input values are null", () => {
      expect(power(null, null)).toBeNull();
      expect(power(null, 23)).toBeNull();
      expect(power(null, undefined)).toBeNull();
    });
    it("should return null if either (or both) input values are undefined", () => {
      expect(power(undefined, undefined)).toBeNull();
      expect(power(undefined, 12)).toBeNull();
      expect(power(undefined, null)).toBeNull();
    });
  });
});
