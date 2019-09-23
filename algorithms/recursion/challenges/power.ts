/**
 * A recursive function which returns the input base value to the power of the
 * input exponent value. i.e 4 ^ 2 = 4 * 4, 6 ^ 3 = 6 * 6 * 6
 * @param base - the base value to use when multiplying by the exponent variable.
 * @param exponent - the amount of times base will be multiplied by itself.
 */
export default function power(base: number, exponent: number): number {
  /**
   * If base is 0, then 0 must be returned as any exponent of zero will always
   * return 0.
   */
  if (base === 0) {
    return 0;
  }
  /**
   * base case - if the number exponent is zero, return 1.
   */
  if (exponent === 0) {
    return 1;
  }
  /**
   * return null for invalid inputs
   */
  if (!base || !exponent) {
    return null;
  }
  /**
   * Multiply base by the result of power() with base and exponent - 1, until the
   * base case is met (exponent is 0).
   */
  return base * power(base, exponent - 1);
}

console.log(power(4, 4));

function powerIterative(base: number, exponent: number): number {
  let sum = 1;
  for (let i = exponent; i > 0; i--) {
    sum *= base;
  }
  return sum;
}

console.log(powerIterative(4, 4));
