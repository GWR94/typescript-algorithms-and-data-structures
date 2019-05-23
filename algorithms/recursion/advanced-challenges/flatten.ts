function flatten(array: any[]): any[] {
	return array.reduce((arr, el) => {
		const items = Array.isArray(el) ? flatten(el) : [el];
		return arr.concat(items);
	}, []);
}

flatten([1, 2, 3, [4, 5]]); // [1, 2, 3, 4, 5]
