/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { fibonacci, fibonacciIterative } from "../fibonacci";

describe("Fibonacci test cases", () => {
  describe("Fibonacci test cases for correct inputs", () => {
    it("should return 55 as the 10th fibonacci number", () => {
      expect(fibonacci(10)).toBe(55);
      expect(fibonacciIterative(10)).toBe(55);
    });
    it("should return 5 as the 5th fibonacci number", () => {
      expect(fibonacci(5)).toBe(5);
      expect(fibonacciIterative(5)).toBe(5);
    });
    it("should return 144 as the 12th fibonacci number", () => {
      expect(fibonacci(12)).toBe(144);
      expect(fibonacciIterative(12)).toBe(144);
    });
    it("should return 8 as the 6th fibonacci number", () => {
      expect(fibonacci(6)).toBe(8);
      expect(fibonacciIterative(6)).toBe(8);
    });
    it("should return 1 as the 1st fibonacci number", () => {
      expect(fibonacci(1)).toBe(1);
      expect(fibonacciIterative(1)).toBe(1);
    });
  });

  describe("Fibonacci test cases for invalid values", () => {
    it("should return null if the input value is null", () => {
      expect(fibonacci(null)).toBeNull();
      expect(fibonacciIterative(null)).toBeNull();
    });
    it("should return null if input value is undefined", () => {
      expect(fibonacci(undefined)).toBeNull();
      expect(fibonacciIterative(undefined)).toBeNull();
    });
    it("should return null if the input value is a negative number", () => {
      expect(fibonacci(-1)).toBeNull();
      expect(fibonacciIterative(-1)).toBeNull();
      expect(fibonacci(-100)).toBeNull();
      expect(fibonacciIterative(-100)).toBeNull();
      expect(fibonacci(-2354235)).toBeNull();
      expect(fibonacciIterative(-2354235)).toBeNull();
    });
  });
});
