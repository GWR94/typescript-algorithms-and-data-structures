/* eslint-disable @typescript-eslint/explicit-function-return-type */
import states from "../data/states";
import { binarySearch } from "../src/binary-search";

describe("Binary search test suite", () => {
  describe("Binary search tests for numbers", () => {
    it("should return 3 as the index which 4 was found in", () => {
      expect(binarySearch([1, 2, 3, 4, 5, 6], 4)).toBe(3);
    });
    it("should return -1 as 10 is not in the array", () => {
      expect(binarySearch([1, 2, 5, 6, 7, 9, 11, 12], 10)).toBe(-1);
    });
    it("should return 2 as the index which 4 is found in", () => {
      expect(binarySearch([1, 3, 4], 4)).toBe(2);
    });
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

  describe("Binary search tests for failing input", () => {
    it("should return -1 based on incorrect arr input (null)", () => {
      expect(binarySearch(null, 1)).toBe(-1);
    });
    it("should return -1 with an empty array as the arr value", () => {
      expect(binarySearch([], 1)).toBe(-1);
    });
    it("should return -1 based on incorrect input (undefined)", () => {
      expect(binarySearch(undefined, 1)).toBe(-1);
    });
    it("should return -1 with undefined as both inputs", () => {
      expect(binarySearch(undefined, undefined)).toBe(-1);
    });
  });
});
