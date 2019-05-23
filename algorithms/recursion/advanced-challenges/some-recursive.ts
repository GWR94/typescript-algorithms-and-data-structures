function someRecursive(arr: any[], func: Function): boolean {
	if (arr.length === 0) return false;
	if (func(arr[0])) return true;
	return someRecursive(arr.slice(1), func);
}

const isOdd = num => {
	return num % 2 === 0;
};

someRecursive([2, 4, 6], isOdd);
