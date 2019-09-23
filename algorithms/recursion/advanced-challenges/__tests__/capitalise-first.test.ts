/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { capitaliseFirst, capitaliseFirstIterative } from "../capitalise-first";

describe("Capitalise first test suite", () => {
  describe("Capitalise first tests for correct input values", () => {
    it("should return ['Hello', 'Test', 'One'] based on the input array", () => {
      expect(capitaliseFirst(["hello", "test", "one"])).toStrictEqual([
        "Hello",
        "Test",
        "One",
      ]);
      expect(capitaliseFirstIterative(["hello", "test", "one"])).toStrictEqual([
        "Hello",
        "Test",
        "One",
      ]);
    });
    it("should return ['HELLO', 'TEST' 'TWO'] based on the input array", () => {
      expect(capitaliseFirst(["hELLO", "tEST", "tWO"])).toStrictEqual([
        "HELLO",
        "TEST",
        "TWO",
      ]);
      expect(capitaliseFirstIterative(["hELLO", "tEST", "tWO"])).toStrictEqual([
        "HELLO",
        "TEST",
        "TWO",
      ]);
    });
    it("should return ['Hi'] based on the input array", () => {
      expect(capitaliseFirst(["hi"])).toStrictEqual(["Hi"]);
      expect(capitaliseFirstIterative(["hi"])).toStrictEqual(["Hi"]);
    });
  });

  describe("Capitalise first test cases for different array values", () => {
    it("should return the same empty array when the input array is empty", () => {
      expect(capitaliseFirst([])).toStrictEqual([]);
      expect(capitaliseFirstIterative([])).toStrictEqual([]);
    });
    it("should return the ['H!!!', 'X123'] based on the input array", () => {
      expect(capitaliseFirst(["h!!!", "x123"])).toStrictEqual(["H!!!", "X123"]);
      expect(capitaliseFirstIterative(["h!!!", "x123"])).toStrictEqual(["H!!!", "X123"]);
    });
  });

  describe("Capitalise first test cases for incorrect values", () => {
    it("should return null if the input is null", () => {
      expect(capitaliseFirst(null)).toBeNull();
      expect(capitaliseFirstIterative(null)).toBeNull();
    });
    it("should return null if the input is undefined", () => {
      expect(capitaliseFirst(undefined)).toBeNull();
      expect(capitaliseFirstIterative(undefined)).toBeNull();
    });
    it("should return null if the first letter is not alphabetic", () => {
      expect(capitaliseFirst(["1", "2"])).toBeNull();
      expect(capitaliseFirstIterative(["1", "2"])).toBeNull();
    });
  });
});
