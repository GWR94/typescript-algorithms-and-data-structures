/* eslint-disable @typescript-eslint/explicit-function-return-type */

import { factorial, factorialIterative } from "../challenges/factorial";
import fib from "../challenges/fibonacci";
import power from "../challenges/power";
import productOfArray from "../challenges/product-of-array";

describe("Basic challenges test suite", () => {
  describe("Factorial test cases", () => {
    it("should return the correct factorial number based on the input", () => {
      expect(factorial(1)).toBe(1);
      expect(factorialIterative(1)).toBe(1);
      expect(factorial(10)).toBe(3628800);
      expect(factorialIterative(10)).toBe(3628800);
      expect(factorial(5)).toBe(120);
      expect(factorialIterative(5)).toBe(120);
      expect(factorial(0)).toBe(1);
      expect(factorialIterative(0)).toBe(1);
    });
    it("should return null for incorrect values", () => {
      expect(factorial(-1000)).toBe(null);
      expect(factorialIterative(-1000)).toBe(null);
    });
  });

  describe("Fibonacci test cases", () => {
    it("should return the correct fibonacci number based on the input", () => {
      expect(fib(10)).toBe(55);
      expect(fib(5)).toBe(5);
      expect(fib(12)).toBe(144);
      expect(fib(6)).toBe(8);
      expect(fib(2)).toBe(1);
    });
    it("should return null for incorrect values", () => {
      expect(fib(-1)).toBe(null);
      expect(fib(-100000)).toBe(null);
      expect(fib(null)).toBe(null);
      expect(fib(undefined)).toBe(null);
    });
  });

  describe("Power test cases", () => {
    it("should return the correct value based on the input", () => {
      expect(power(6, 2)).toBe(36);
      expect(power(4, 2)).toBe(16);
      expect(power(6, 6)).toBe(46656);
      expect(power(23, 6)).toBe(148035889);
    });
    it("should return null for incorrect values", () => {
      expect(power(null, null)).toBe(null);
      expect(power(null, 23)).toBe(null);
      expect(power(undefined, undefined)).toBe(null);
      expect(power(undefined, 12)).toBe(null);
      expect(power(undefined, null)).toBe(null);
    });
  });

  describe("Product of Array test cases", () => {
    it("should return the correct sum based on the input array", () => {
      expect(productOfArray([1, 2, 3])).toBe(6);
      expect(productOfArray([1, 2, 3, 4, 5])).toBe(15);
      expect(productOfArray([1])).toBe(1);
      expect(productOfArray([10, 100, 1])).toBe(111);
      expect(productOfArray([])).toBe(0);
    });
    it("should return null for incorrect input values", () => {
      expect(productOfArray(null)).toBe(null);
      expect(productOfArray(undefined)).toBe(null);
    });
  });
});
