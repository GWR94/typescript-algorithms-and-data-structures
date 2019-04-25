function factorial(num: number) {
	if (num === 1 || num === 0) {
		return 1;
	}
	return num * factorial(num - 1);
}

console.log(factorial(0));
