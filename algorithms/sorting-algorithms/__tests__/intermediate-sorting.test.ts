// /* eslint-disable @typescript-eslint/explicit-function-return-type */
import mergeSort from "../src/advanced-sorting/merge-sort/merge-sort";
import quickSort from "../src/advanced-sorting/quick-sort/quick-sort";
import radixSort from "../src/advanced-sorting/radix-sort";

describe("Intermediate sorting test suite", () => {
  describe("Unsorted numeric array test cases", () => {
    const inputA = [-20, 74, 22, -500, 11, 1, -1000];
    const expectedA = [-1000, -500, -20, 1, 11, 22, 74];

    const inputB = [234, 3444, 541, -100, 0, -238389, 1000000];
    const expectedB = [-238389, -100, 0, 234, 541, 3444, 1000000];

    it("should return a numerically sorted array from mergeSort", () => {
      expect(mergeSort(inputA)).toEqual(expectedA);
      expect(mergeSort(inputB)).toEqual(expectedB);
    });
    // it("should return a numerically sorted array from quickSort", () => {
    //   expect(quickSort(inputA)).toEqual(expectedA);
    //   expect(quickSort(inputB)).toEqual(expectedB);
    // });
    it("should return a numerically sorted array from radixSort", () => {
      expect(radixSort(inputA)).toEqual(expectedA);
      expect(radixSort(inputB)).toEqual(expectedB);
    });
  });
});

//   describe("Unsorted alphabetical array test cases", () => {
//     const inputA = ["e", "ab", "g", "c", "abc", "d", "b", "a", "f"];
//     const expectedA = ["a", "ab", "abc", "b", "c", "d", "e", "f", "g"];

//     const inputB = ["Hello", "This", "Is", "A", "TEST"];
//     const expectedB = ["A", "Hello", "Is", "TEST", "This"];

//     it("should return an alphabetically sorted array from mergeSort", () => {
//       expect(mergeSort(inputA)).toEqual(expectedA);
//       expect(mergeSort(inputB)).toEqual(expectedB);
//     });
//     it("should return an alphabetically sorted array from quickSort", () => {
//       expect(quickSort(inputA)).toEqual(expectedA);
//       expect(quickSort(inputB)).toEqual(expectedB);
//     });
//   });

//   describe("Edge cases", () => {
//     it("should return the same array if it's already sorted or empty - mergeSort", () => {
//       expect(mergeSort([-10, 1, 2, 3])).toEqual([-10, 1, 2, 3]);
//       expect(mergeSort([])).toEqual([]);
//     });
//     it("should return the same array if it's already sorted or empty - quickSort", () => {
//       expect(quickSort([-10, 1, 2, 3])).toEqual([-10, 1, 2, 3]);
//       expect(quickSort([])).toEqual([]);
//     });
//     it("should return the same array if it's already sorted or empty - radixSort", () => {
//       expect(radixSort([-10, 1, 2, 3])).toEqual([-10, 1, 2, 3]);
//       expect(radixSort([])).toEqual([]);
//     });
//   });
// });
