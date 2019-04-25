function areThereDuplicatesSets(arr: any[]) {
	return new Set(arr).size !== arr.length;
	/*
        A set removes all duplicate values, so if the the length of
        the set is not the same as the arguments array, then there
        must be duplicates.
    */
}

console.log(areThereDuplicatesSets(["a", "b", "c", "d", "e", "f"]));
