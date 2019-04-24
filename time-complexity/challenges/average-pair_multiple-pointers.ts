function averagePair(arr: number[], num: number) {
	let i: number = 0;
	let j: number = 1;
	while (i < arr.length - 1) {
		let average: number = (arr[i] + arr[j]) / 2;
		if (average === num) return true;
		if (j === arr.length - 1) {
			i++;
			j = i + 1;
		} else {
			j++;
		}
	}
	return false;
}
console.log(averagePair([4, 1, 1, 1, 1, 1, 1, 1, 8, 2, 6], 4));
