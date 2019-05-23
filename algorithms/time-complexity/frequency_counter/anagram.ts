function anagram(str1: string, str2: string): boolean {
	const lookup: object = {};

	if (str1.length !== str2.length) {
		return false; // if strings aren't the same length, it cannot be an anagram, so return false.
	}

	for (const letter of str1) {
		lookup[letter] = lookup[letter]
			? (lookup[letter] += 1) // if there is already a value for the letter key, add one to it
			: (lookup[letter] = 1); // if the value doesn't exist, then initialise it at 1.
	}

	for (const letter of str2) {
		if (!lookup[letter]) {
			// if letter isn't in the object, or its value is zero, return false.
			console.log(`${str1} is not an anagram of ${str2}`);
			return false;
		}
		lookup[letter] -= 1; // else take one away from its value and continue loop.
	}
	console.log(`${str1} is an anagram of ${str2}`);
	return true;
	// if loop is completed without returning false, then it's an anagram so return true.
}

anagram("abcdca", "abacdc"); // true
anagram("iceman", "cinema"); // true
anagram("abc", "cbaa"); // false
