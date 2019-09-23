/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { capitaliseWords, capitaliseWordsIterative } from "../capitalise-words";

describe("Capitalise words test suite", () => {
  describe("Capitalise words test cases for correct values", () => {
    it("should return a new capitalised array when the input array contains only alphabetical strings", () => {
      expect(capitaliseWords(["hello", "test", "one!"])).toStrictEqual([
        "HELLO",
        "TEST",
        "ONE!",
      ]);
      expect(capitaliseWordsIterative(["hello", "test", "one!"])).toStrictEqual([
        "HELLO",
        "TEST",
        "ONE!",
      ]);
      expect(capitaliseWords(["hI", "tEST"])).toStrictEqual(["HI", "TEST"]);
      expect(capitaliseWordsIterative(["hI", "tEST"])).toStrictEqual(["HI", "TEST"]);
    });
    it("should return the same values in the new array when there are no alphabetical characters in the string", () => {
      expect(capitaliseWords(["!!"])).toStrictEqual(["!!"]);
      expect(capitaliseWordsIterative(["!!"])).toStrictEqual(["!!"]);
      expect(capitaliseWords(["1", "2", "3"])).toStrictEqual(["1", "2", "3"]);
      expect(capitaliseWordsIterative(["1", "2", "3"])).toStrictEqual(["1", "2", "3"]);
    });
    it("should return an empty array when the input array is empty", () => {
      expect(capitaliseWords([])).toStrictEqual([]);
      expect(capitaliseWords([])).toStrictEqual([]);
    });
  });

  describe("Capitalise words test cases for incorrect input values", () => {
    it("should return null if the input value is null", () => {
      expect(capitaliseWords(null)).toBeNull();
      expect(capitaliseWordsIterative(null)).toBeNull();
    });
    it("should return null if the input value is undefined", () => {
      expect(capitaliseWords(undefined)).toBeNull();
      expect(capitaliseWordsIterative(undefined)).toBeNull();
    });
  });
});
