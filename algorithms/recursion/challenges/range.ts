function range(min, max): number[] {
  let arr = [];
  if (min === max - 1) return arr;
  arr.push(min + 1);
  arr = arr.concat(range(min + 1, max));
  return arr;
}
console.log(range(2, 9));
