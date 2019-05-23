import states from "../data/states";

/**
 * A linear search is where you have a data structure, and iterate through
 * all of the items in that structure, until you find the item or get to the
 * end of the data structure. Built in functions like indexOf and includes
 * all use linear searching.
 */

export default function linearSearch(arr: any[], val: any): number {
	if (!Array.isArray(arr) || val === undefined || val === null) return -1;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === val) {
			console.log(
				`${val} found at index ${i} and took ${i + 1} iterations`
			);
			return i;
		}
	}
	console.log(`${val} not found in array`);
	return -1;
}

linearSearch(states, "Indiana");
linearSearch(states, "Texas");
linearSearch(states, "California");
linearSearch(states, "fail");
