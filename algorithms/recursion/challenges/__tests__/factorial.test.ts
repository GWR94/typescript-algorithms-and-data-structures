/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { factorial, factorialIterative } from "../factorial";

describe("Factorial test suite", () => {
  describe("Factorial test cases for valid input values", () => {
    it("should return 1 for 1 as the input number", () => {
      expect(factorial(1)).toBe(1);
      expect(factorialIterative(1)).toBe(1);
    });
    it("should return 3628800 for 1 as the input number", () => {
      expect(factorial(10)).toBe(3628800);
      expect(factorialIterative(10)).toBe(3628800);
    });
    it("should return 120 for 5 as the input number", () => {
      expect(factorial(5)).toBe(120);
      expect(factorialIterative(5)).toBe(120);
    });
    it("should return 1 for 1 as the input number", () => {
      expect(factorial(0)).toBe(1);
      expect(factorialIterative(0)).toBe(1);
    });
  });
  describe("Factorial test cases for invalid inputs", () => {
    it("should return null for negative values", () => {
      expect(factorial(-1000)).toBeNull();
      expect(factorialIterative(-1000)).toBeNull();
      expect(factorial(-1)).toBeNull();
      expect(factorialIterative(-1)).toBeNull();
    });
    it("should return null for null as an input", () => {
      expect(factorial(null)).toBeNull();
      expect(factorialIterative(null)).toBeNull();
    });
    it("should return null for undefined as an input", () => {
      expect(factorial(undefined)).toBeNull();
      expect(factorialIterative(undefined)).toBeNull();
    });
  });
});
