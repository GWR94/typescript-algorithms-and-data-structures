function selectionSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		let smallest = i;
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[smallest] > arr[j]) {
				smallest = j;
			}
		}
		if (i !== smallest) {
			swap(arr, i, smallest);
		}
	}
	arr;
	return arr;
}

const swap = (arr, idx1, idx2) => {
	[arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

console.log(selectionSort([4, 4, 2, 22, 11, 324]));
