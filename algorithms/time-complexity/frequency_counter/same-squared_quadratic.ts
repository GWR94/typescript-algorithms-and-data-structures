function sameSquaredQuad(arr1: number[], arr2: number[]) {
	for (const i of arr1) {
		const char: number = arr1[i];
		const index: number = arr2.indexOf(char ** 2);
		if (index === -1) {
			return false;
		}
		arr2.splice(index, 1);
	}
	return true;
}

console.log(sameSquaredQuad([1, 3, 2, 2, 5], [1, 4, 4, 9, 25]));
