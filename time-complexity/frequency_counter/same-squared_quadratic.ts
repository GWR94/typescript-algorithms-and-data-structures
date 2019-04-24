function sameSquared(arr1: Array<number>, arr2: Array<number>) {
	for (let i: number = 0; i < arr1.length; i++) {
		const char: number = arr1[i];
		const index: number = arr2.indexOf(char ** 2);
		if (index === -1) return false;
		arr2.splice(index, 1);
	}
	return true;
}

console.log(sameSquared([1, 3, 2, 2, 5], [1, 4, 4, 9, 25]));
