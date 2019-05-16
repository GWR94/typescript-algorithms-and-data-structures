function capitalizeFirst(arr: string[]) {
	const newArr = [];
	capitaliseHelper(arr);
	function capitaliseHelper(array: string[]) {
		if (array.length === 0) return;
		const el = arr[0][0].toUpperCase() + arr[0].slice(1);
		newArr.push(el);
		array.shift();
		return capitaliseHelper(array);
	}
	console.log(newArr);
	return newArr;
}

capitalizeFirst(["hello", "abc"]);
