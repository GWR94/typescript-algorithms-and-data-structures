function sameSquared(arr1: number[], arr2: number[]) {
	const count1: object = {};
	const count2: object = {};
	for (const val1 of arr1) {
		count1[val1] = (count1[val1] || 0) + 1;
	}
	for (const val2 of arr2) {
		count2[val2] = (count2[val2] || 0) + 1;
	}
	let key: any;
	for (key in count1) {
		if (count1.hasOwnProperty(key)) {
			if (!(key ** 2 in count2)) {
				return false;
			}
			if (count2[key ** 2] !== count1[key]) {
				return false;
			}
		}
	}
	return true;
}

console.log(sameSquared([1, 3, 2, 2, 5], [1, 4, 4, 9, 25]));
