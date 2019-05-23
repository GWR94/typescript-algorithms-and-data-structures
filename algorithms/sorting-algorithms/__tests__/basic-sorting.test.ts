import bubbleSort from "../src/basic/bubble-sort";
import insertionSort from "../src/basic/insertion-sort";
import selectionSort from "../src/basic/selection-sort";

describe("Sorting test suite", () => {
	describe("Unsorted numeric array test cases", () => {
		const input = [-20, 74, 22, -500, 11, 1, -1000];
		const expected = [-1000, -500, -20, 1, 11, 22, 74];
		it("should return a numerically sorted array from bubbleSort", () => {
			expect(bubbleSort(input)).toEqual(expected);
		});
		it("should return a numerically sorted array from insertionSort", () => {
			expect(insertionSort(input)).toEqual(expected);
		});
		it("should return a numerically sorted array from selectionSort", () => {
			expect(selectionSort(input)).toEqual(expected);
		});
	});

	describe("Unsorted alphabetical array test cases", () => {
		const input = ["e", "ab", "g", "c", "abc", "d", "b", "a", "f"];
		const expected = ["a", "ab", "abc", "b", "c", "d", "e", "f", "g"];
		it("should return an alphabetically sorted array from bubbleSort", () => {
			expect(bubbleSort(input)).toEqual(expected);
		});
		it("should return an alphabetically sorted array from bubbleSort", () => {
			expect(insertionSort(input)).toEqual(expected);
		});
		it("should return an alphabetically sorted array from selectionSort", () => {
			expect(selectionSort(input)).toEqual(expected);
		});
	});
});
