import states from "../../searching-algorithms/data/states";

export function binarySearch(
  arr: any[],
  val: any,
  min = 0,
  max = arr.length - 1,
): number {
  while (min <= max) {
    const mid = Math.floor((min + max) / 2);
    if (arr[mid] === val) return mid;
    return arr[mid] > val
      ? binarySearch(arr, val, min, mid - 1)
      : binarySearch(arr, val, mid + 1, max);
  }
  return -1;
}

console.log(binarySearch(states, "Arizona"));

export function binarySearchIterative(arr: any[], val: any): number {
  let min = 0;
  let max = arr.length - 1;
  while (min <= max) {
    const mid = Math.floor((min + max) / 2);
    if (arr[mid] === val) return mid;
    arr[mid] > val ? (max = mid - 1) : (min = mid + 1);
  }
  return -1;
}
