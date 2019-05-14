function stringSearch(str: string, substr: string) {
	let matches: number = 0;
	for (let i = 0; i < str.length; i++) {
		if (str[i] === substr[0]) {
			for (let j = 0; j < substr.length; j++) {
				if (str[i + j] !== substr[j]) break;
				if (j === substr.length - 1) matches++;
			}
		}
	}
	console.log(matches);
	return matches;
}

stringSearch("zomgasddomgsddszomgsdssomm", "omg");
