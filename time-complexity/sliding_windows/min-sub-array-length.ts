function minSubArrayLen(arr: number[], num: number) {
	let count: number = 1;
	while (count < arr.length) {
		let total: number = 0;
		for (let i: number = 0; i < count; i++) {
			total += arr[i];
			if (arr[i] > num) {
				return 1;
			}
			if (total === num) {
				return count;
			}
		}
		for (let i = count; i < arr.length; i++) {
			total = total - arr[i - count] + arr[i];
			if (total === num) {
				return count;
			}
		}
		console.log(total);
		count++;
	}
	return 0;
}

console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55));
