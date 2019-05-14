import linearSearch from "../src/linear-search";

describe("Linear search test cases", () => {
	describe("Linear search test cases for a numeric array for arr", () => {
		it("should return 4 as the index for 9", () => {
			expect(linearSearch([2, 41, 21, 21, 9], 9)).toBe(4);
		});
		it("Should return 1 as the index for 1", () => {
			expect(linearSearch([0, 1, 2, 3], 1)).toBe(1);
		});
		it("should return 0 as the index for 100", () => {
			expect(linearSearch([100], 100)).toBe(0);
		});
	});

	describe("Linear search test cases for different array types", () => {
		it("should return 1 as the index of true", () => {
			expect(linearSearch([false, true, false, false], true)).toBe(1);
		});
		it("should return 2 for the index of the first false", () => {
			expect(linearSearch([true, true, false, false], false)).toBe(2);
		});
		it('should return 4 for the index of "Hello" in a string array', () => {
			expect(
				linearSearch(["Hi", "Helo", "Helloo", "Hey", "Hello"], "Hello")
			).toBe(4);
		});
		it("should return 2 for the index of true in a mixed array", () => {
			expect(
				linearSearch([2, false, true, { foo: "bar" }, "Hello"], true)
			).toBe(2);
		});
	});

	describe("Linear search test cases for incorrect inputs", () => {
		it("should return -1 for an empty array as arr", () => {
			expect(linearSearch([], 1)).toBe(-1);
		});
		it("should return -1 for undefined arr input", () => {
			expect(linearSearch(undefined, 1)).toBe(-1);
		});
		it("should return -1 for undefined val input", () => {
			expect(linearSearch([1, 2, 3, 4], undefined)).toBe(-1);
		});
	});
});
