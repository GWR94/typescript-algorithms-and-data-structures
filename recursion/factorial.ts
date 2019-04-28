function factorialRecursive(num: number) {
	/**
	 * Recursive function to get the factorial of num,
	 * which is the product of all the previous numbers
	 * up to 1
	 */
	if (num === 1 || num === 0) {
		return 1;
	}
	return num * factorial(num - 1);
}

function factorialIterative(num: number) {
	/**
	 * Set total to 1, and num to the input of the function,
	 * then loop down up until we get to 2. Each iteration we
	 * multiply the total by i, and continue with the loop.
	 * After the loop is finished, we return the total.
	 */
	let total = 1;
	for (let i = num; i > 1; i--) {
		total *= i;
	}
	return total;
}

console.log(factorialRecursive(5));
console.log(factorialIterative(10));