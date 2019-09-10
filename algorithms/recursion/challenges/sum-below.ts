function sumBelow(num: number) {
  if (num === 0) return num;
  return num - 1 + sumBelow(num - 1);
}
console.log(sumBelow(7));
