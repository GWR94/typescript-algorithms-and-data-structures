function sumZeroQuad(arr: number[]) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] + arr[j] === 0) {
				return [arr[i], arr[j]];
			}
		}
	}
	return null;
}

console.log(sumZeroQuad([-4, -3, -2, -1, 0, 1, 2, 3, 10]));
