function isSequence([...str1], [...str2]) {
	if (str1.length > str2.length) return false;
	let i = 0;
	for (let j = 0; j < str2.length; j++) {
		if (str1[i] === str2[j]) i++;
		if (i === str1.length) return true;
	}
	return false;
}

console.log(isSequence("abc", "abdc"));
