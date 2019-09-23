/**
 * ES6 way of swapping the indices of idx1 and idx2, then
 * returning it.
 */
const swap = (arr: any[], idx1: number, idx2: number): void => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

/**
 * ES5 way of swapping the indices of idx1 and idx2, then
 * returning it
 */
function es5Swap(arr: any[], idx1: number, idx2: number): any[] {
  const temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
  return arr;
}

export { swap as default, es5Swap };
