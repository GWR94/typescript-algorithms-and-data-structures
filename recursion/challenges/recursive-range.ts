function recursiveRange(num: number) {
	if (num === 0) return num;
	return num + recursiveRange(num - 1);
}

console.log(recursiveRange(6));
