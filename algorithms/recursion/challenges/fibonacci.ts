export default function fib(num: number) {
	if (num < 0) return null;
	else if (num <= 2 && num > 0) return 1;
	return fib(num - 2) + fib(num - 1);
}

console.log(fib(2));
