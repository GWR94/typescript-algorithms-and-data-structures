function countZeroesIterative(arr: number[]): number {
  let min = 0;
  let max = arr.length - 1;
  if (arr[min] === 0) return arr.length;
  while (min <= max) {
    const mid = Math.floor((min + max) / 2);
    if (arr[mid] === 0 && arr[mid - 1] === 1) {
      return arr.length - mid;
    }
    arr[mid] === 1 ? (min = mid + 1) : (max = mid - 1);
  }
  return 0;
}

function countZeroesRecursive(
  arr: number[],
  min: number = 0,
  max: number = arr.length - 1,
): number {
  const mid = Math.floor((max + min) / 2);
  if (min > max) return 0;
  if (arr[0] === 0) return arr.length;
  if (arr[mid] === 0 && arr[mid - 1] === 1) {
    return arr.length - mid;
  }
  return arr[mid] === 1
    ? countZeroesRecursive(arr, mid + 1, max)
    : countZeroesRecursive(arr, min, mid - 1);
}

function countZeroesLinear(arr: number[]): number {
  let zeroes = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) zeroes++;
  }
  return zeroes;
}

console.log(`
  RECURSIVE DIVIDE & CONQUER: ${countZeroesRecursive([1, 1, 1, 1, 1, 1, 0, 0, 0])}
  ITERATIVE DIVIDE & CONQUER: ${countZeroesIterative([1, 1, 1, 1, 1, 1, 0, 0, 0])}
  LINEAR SOLUTION: ${countZeroesLinear([1, 1, 1, 1, 1, 1, 0, 0, 0])}`);
