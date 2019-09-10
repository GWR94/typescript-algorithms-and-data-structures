function searchMinMax(arr, num, getFirst): number {
  let min = 0;
  let max = arr.length - 1;
  let index = -1;
  while (min <= max) {
    const mid = Math.floor((max + min) / 2);
    if (arr[mid] === num) {
      index = mid;
      if (getFirst) {
        max = mid - 1;
      } else {
        min = mid + 1;
      }
    } else if (num < arr[mid]) {
      max = mid - 1;
    } else {
      min = mid + 1;
    }
  }
  return index;
}

function sortedFrequency(arr: number[], num): number {
  const first = searchMinMax(arr, num, true);
  const last = searchMinMax(arr, num, false);
  if (first === -1 || last === -1) return -1;
  return last - first + 1;
}

console.log(sortedFrequency([1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 5], 3));
