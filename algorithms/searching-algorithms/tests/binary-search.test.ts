import binarySearch from "../binary-search";
import states from "../data/states";

describe("Binary search tests for numbers", () => {
	const error = console.log;
	console.log = jest.fn();
	it("should return 3 as the index which 4 was found in", () => {
		expect(binarySearch([1, 2, 3, 4, 5, 6], 4)).toBe(3);
	});
	it("should return -1 as 10 is not in the array", () => {
		expect(binarySearch([1, 2, 5, 6, 7, 9, 11, 12], 10)).toBe(-1);
	});
	it("should return -1 for an empty array", () => {
		expect(binarySearch([], 1)).toBe(-1);
	});
	console.log = error;
});

describe("Binary search tests for states array", () => {
	it("should return -1 as fail is not a valid state", () => {
		expect(binarySearch(states, "fail")).toBe(-1);
	});
	it("should return 0 as the index of Alabama from states array", () => {
		expect(binarySearch(states, "Alabama")).toBe(0);
	});
	it("should return 17 for the index of Indiana from states array", () => {
		expect(binarySearch(states, "Indiana")).toBe(17);
	});
});
