/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { sumRange, sumRangeIterative } from "../sum-range";

describe("Sum range test suite", () => {
  describe("Sum range test cases for valid inputs", () => {
    it("should return the correct value based on the input", () => {
      expect(sumRange(6)).toBe(21);
      expect(sumRange(7)).toBe(28);
      expect(sumRange(8)).toBe(36);
      expect(sumRange(9)).toBe(45);
      expect(sumRange(10)).toBe(55);
      expect(sumRangeIterative(6)).toBe(21);
      expect(sumRangeIterative(7)).toBe(28);
      expect(sumRangeIterative(8)).toBe(36);
      expect(sumRangeIterative(9)).toBe(45);
      expect(sumRangeIterative(10)).toBe(55);
    });
  });
  describe("It should return null for invalid inputs", () => {
    it("should return null if the input is null", () => {
      expect(sumRange(null)).toBeNull();
      expect(sumRangeIterative(null)).toBeNull();
    });
    it("should return null if undefined is the input", () => {
      expect(sumRange(undefined)).toBeNull();
      expect(sumRangeIterative(undefined)).toBeNull();
    });
    it("should return null if the input is  values", () => {
      expect(sumRange(-1)).toBeNull();
      expect(sumRange(-10)).toBeNull();
      expect(sumRangeIterative(-1)).toBeNull();
      expect(sumRangeIterative(-10)).toBeNull();
    });
  });
});
