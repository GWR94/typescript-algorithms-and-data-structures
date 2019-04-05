function areThereDuplicates() {
	return new Set(arguments).length !== arguments.length;
	/* 
        A set removes all duplicate values, so if the the length of
        the set is not the same as the arguments array, then there 
        must be duplicates.
    */
}

console.log(areThereDuplicates("a", "b", "c", "d", "e", "c"));
