function fib(num) {
	if (num <= 2) return 1;
	return fib(num - 2) + fib(num - 1);
}

console.log(fib(10));
