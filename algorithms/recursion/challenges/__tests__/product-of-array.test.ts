/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { productOfArray, productOfArrayIterative } from "../product-of-array";

describe("Product of array test suite", () => {
  describe("Product of array test cases for valid values", () => {
    it("should return the correct sum with positive values in the array", () => {
      expect(productOfArray([1, 2, 3])).toBe(6);
      expect(productOfArray([1, 2, 3, 4, 5])).toBe(15);
      expect(productOfArray([1])).toBe(1);
      expect(productOfArray([10, 100, 1])).toBe(111);
      expect(productOfArray([])).toBe(0);
      expect(productOfArrayIterative([1, 2, 3])).toBe(6);
      expect(productOfArrayIterative([1, 2, 3, 4, 5])).toBe(15);
      expect(productOfArrayIterative([1])).toBe(1);
      expect(productOfArrayIterative([10, 100, 1])).toBe(111);
      expect(productOfArrayIterative([])).toBe(0);
    });
    it("should return the correct sum for negative values in the array", () => {
      expect(productOfArray([-1, -10, -23])).toBe(-34);
      expect(productOfArray([-1, -2, -3])).toBe(-6);
      expect(productOfArray([-10, -20, -5, 0])).toBe(-35);
      expect(productOfArrayIterative([-1, -10, -23])).toBe(-34);
      expect(productOfArrayIterative([-1, -2, -3])).toBe(-6);
      expect(productOfArrayIterative([-10, -20, -5, 0])).toBe(-35);
    });
    it("should return 0 for an empty input array", () => {
      expect(productOfArray([])).toBe(0);
      expect(productOfArrayIterative([])).toBe(0);
    });
  });
  describe("Product of array test cases for incorrect input values", () => {
    it("should return null if the input values is null", () => {
      expect(productOfArray(null)).toBeNull();
      expect(productOfArrayIterative(null)).toBeNull();
    });
    it("should return null if the input value is undefined", () => {
      expect(productOfArray(undefined)).toBeNull();
      expect(productOfArrayIterative(undefined)).toBeNull();
    });
  });
});
