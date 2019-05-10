/**
 * Recursive function which counts down from num
 * to zero, logging num to the console after every
 * iteration.
 * @param num number to count down from.
 */
function countDown(num: number, decrement: number = 1) {
	if (num <= 0) {
		console.log("All done!");
		return;
	}
	console.log(num);
	num -= decrement;
	countDown(num, decrement);
}

countDown(5, 2);
countDown(55, 5);
countDown(10);

/**
 * Recursive function which takes a number and adds all the
 * previous numbers to get a result.
 * @param num the number to which all previous numbers in
 * sequence must add together to get the total (3: 1+2+3=6)
 */
function sumRange(num: number) {
	if (num === 1) {
		return 1;
	}
	return num + sumRange(num - 1);
}

console.log(sumRange(3));
