export function binarySearch(
  arr: any[],
  val: any,
  min = 0,
  max = arr ? arr.length - 1 : null,
): number {
  val = typeof val === "string" ? val.toLowerCase() : val;
  while (min <= max) {
    const mid = Math.floor((min + max) / 2);
    if (arr[mid] === val) return mid;
    return arr[mid] > val
      ? binarySearch(arr, val, min, mid - 1)
      : binarySearch(arr, val, mid + 1, max);
  }
  return -1;
}
