/**
 * A function which returns the nth fibonacci number, where n is the input parameter
 * (num).
 * @param num - the fibonacci number to return from the series.
 */
export default function fib(num: number): number {
  // check for invalid inputs
  if (num < 0 || !num) return null;
  // base case
  else if (num <= 2 && num > 0) return 1;
  // different inputs. fibonacci numbers are numbers which add the two previous values.
  return fib(num - 2) + fib(num - 1);
}

console.log(fib(2));
