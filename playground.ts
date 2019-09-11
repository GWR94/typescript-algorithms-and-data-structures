import states from "./algorithms/searching-algorithms/data/states";

function binarySearch(arr, val, min = 0, max = arr.length - 1): number {
  while (min <= max) {
    const mid = Math.floor((min + max) / 2);
    if (arr[mid] === val) return mid;
    return arr[mid] > val
      ? binarySearch(arr, val, min, mid - 1)
      : binarySearch(arr, val, mid + 1, max);
  }
  return -1;
}
console.log(binarySearch(states, "Texas"));
