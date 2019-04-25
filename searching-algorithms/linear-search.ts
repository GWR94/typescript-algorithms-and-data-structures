import states from "./data/states";

/**
 * A linear search is where you have a data structure, and iterate through
 * all of the items in that structure, until you find the item or get to the
 * end of the data structure. Built in functions like indexOf and includes
 * all use linear searching.
 */

function linearSearch(arr: any[], val: any) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === val) {
			return console.log(
				`${val} found at index ${i} and took ${i + 1} iterations`
			);
		}
	}
	return console.log(`${val} not found in array`);
}

linearSearch(states, "Indiana");
linearSearch(states, "Texas");
linearSearch(states, "California");
linearSearch(states, "fail");
