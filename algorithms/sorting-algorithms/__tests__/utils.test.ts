import merge from "../utils/merge";

describe("Utilities test suite", () => {
	describe("Merge test cases", () => {
		it("should return one sorted array from 2 sorted numeric sub-arrays", () => {
			expect(merge([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
			expect(
				merge([-1000, 6, 23, 1001, 2899], [-50, 1, 15, 999, 10000])
			).toEqual([-1000, -50, 1, 6, 15, 23, 999, 1001, 2899, 10000]);
			expect(merge([1], [1])).toEqual([1, 1]);
		});
		it("should return one sorted array from 2 alphabetically sorted sub-arrays", () => {
			expect(merge(["a", "b", "c"], ["d", "e", "f"])).toEqual([
				"a",
				"b",
				"c",
				"d",
				"e",
				"f"
			]);
			expect(
				merge(
					["abc", "bcd", "dfj", "zzzz"],
					["agh", "boo", "bood", "z"]
				)
			).toEqual(["abc", "agh", "bcd", "boo", "bood", "dfj", "z", "zzzz"]);
		});
	});
});
