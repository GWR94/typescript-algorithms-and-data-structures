function collectOdds(arr: number[]): number[] {
  let newArr: number[] = [];
  if (arr.length === 0) {
    return newArr;
  }
  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }
  newArr = newArr.concat(collectOdds(arr.slice(1)));
  return newArr;
}

console.log(
  collectOdds([1, 2, 3, 4, 5]); // [1,3,5]
);


