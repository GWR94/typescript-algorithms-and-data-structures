function sameFreqCounter(arr1: Array<number>, arr2: Array<number>) {
	const count1: Object = {};
	const count2: Object = {};
	for (let val of arr1) {
		count1[val] = (count1[val] || 0) + 1;
	}
	for (let val of arr2) {
		count2[val] = (count2[val] || 0) + 1;
	}
	let key: any;
	for (key in count1) {
		if (!(key ** 2 in count2)) return false;
		if (count2[key ** 2] !== count1[key]) return false;
	}
	return true;
}
