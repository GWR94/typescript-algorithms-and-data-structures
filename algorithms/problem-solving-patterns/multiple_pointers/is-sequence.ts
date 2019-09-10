function isSequence(str1: string, str2: string): boolean {
	if (str1.length > str2.length) {
		return false;
	}
	let i: number = 0;
	/* tslint:disable-next-line */
	for (let j: number = 0; j < str2.length; j++) {
		if (str1[i] === str2[j]) {
			i++;
		}
		if (i === str1.length) {
			return true;
		}
	}
	return false;
}

console.log(isSequence("abc", "abcdd"));
