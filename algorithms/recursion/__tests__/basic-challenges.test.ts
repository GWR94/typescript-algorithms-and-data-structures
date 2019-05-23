import { factorial, factorialIterative } from "../challenges/factorial";
import fib from "../challenges/fibonacci";

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
	});
});
