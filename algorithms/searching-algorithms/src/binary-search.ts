import states from "../data/states";

export default function binarySearch(arr: any[], val: any): number {
  if (!Array.isArray(arr) || !val || !arr) return -1;
  let left = 0;
  let right = arr.length - 1;
  let mid: number = Math.floor((left + right) / 2);
  let count = 1;

  while (left < right) {
    arr[mid] > val ? (right = mid - 1) : (left = mid + 1);
    mid = Math.floor((left + right) / 2);
    if (arr[mid] === val) {
      console.log(`${val} found at index ${mid}, and took ${count} iterations`);
      return mid;
    }
    count++;
  }
  console.log(`${val} not found in array`);
  return -1;
}

binarySearch([1, 2, 3, 4, 5, 6], 4);
binarySearch(states, "Indiana");
binarySearch(states, "Alabama");
