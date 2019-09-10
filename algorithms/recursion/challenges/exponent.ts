function exponent(num, power): number {
  if (power === 1) return num;
  return num * exponent(num, power - 1);
}

console.log(exponent(4, 3), exponent(8, 3));
