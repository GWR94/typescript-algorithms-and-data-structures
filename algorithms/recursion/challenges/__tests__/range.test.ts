/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { range, rangeIterative } from "../range";

describe("Range test suite", () => {
  describe("Range test cases for correct min and max values", () => {
    it("should return correct value with positive min and max values", () => {
      expect(range(1, 5)).toStrictEqual([2, 3, 4]);
      expect(range(1, 2)).toStrictEqual([]);
      expect(range(1, 3)).toStrictEqual([2]);
      expect(rangeIterative(1, 5)).toStrictEqual([2, 3, 4]);
      expect(rangeIterative(1, 2)).toStrictEqual([]);
      expect(rangeIterative(1, 3)).toStrictEqual([2]);
    });
  });
  it("should return the correct value with negative values ", () => {
    expect(range(-10, -5)).toStrictEqual([-9, -8, -7, -6]);
    expect(range(-3, -1)).toStrictEqual([-2]);
    expect(range(-3, -2)).toStrictEqual([]);
    expect(rangeIterative(-10, -5)).toStrictEqual([-9, -8, -7, -6]);
    expect(rangeIterative(-3, -1)).toStrictEqual([-2]);
    expect(rangeIterative(-3, -2)).toStrictEqual([]);
  });

  it("should return the correct values for mixed min and max values", () => {
    expect(range(-5, 0)).toStrictEqual([-4, -3, -2, -1]);
    expect(range(-1, 11)).toStrictEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(rangeIterative(-5, 0)).toStrictEqual([-4, -3, -2, -1]);
    expect(rangeIterative(-1, 11)).toStrictEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
  describe("Range test cases for incorrect min or max values", () => {
    it("should return null for if either min or max are null", () => {
      expect(range(null, null)).toBeNull();
      expect(range(null, 20)).toBeNull();
      expect(range(undefined, null)).toBeNull();
      expect(range(20, null)).toBeNull();
      expect(rangeIterative(null, null)).toBeNull();
      expect(rangeIterative(null, 20)).toBeNull();
      expect(rangeIterative(undefined, null)).toBeNull();
      expect(rangeIterative(20, null)).toBeNull();
    });
    it("should return null if either min or max are undefined", () => {
      expect(range(undefined, 10)).toBeNull();
      expect(range(10, undefined)).toBeNull();
      expect(range(undefined, undefined)).toBeNull();
      expect(range(null, undefined)).toBeNull();
      expect(rangeIterative(undefined, 10)).toBeNull();
      expect(rangeIterative(10, undefined)).toBeNull();
      expect(rangeIterative(undefined, undefined)).toBeNull();
      expect(rangeIterative(null, undefined)).toBeNull();
    });
    it("should return null if min is equal to or larger than max", () => {
      expect(range(1, 1)).toBeNull();
      expect(range(10, 1)).toBeNull();
      expect(rangeIterative(1, 1)).toBeNull();
      expect(rangeIterative(10, 1)).toBeNull();
    });
  });
});
