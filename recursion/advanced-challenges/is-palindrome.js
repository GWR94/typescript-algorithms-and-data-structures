function isPalindrome(str) {
	if (str.length === 1) return true;
	if (str.length === 2) {
		if (str[0] === str[1]) return true;
		return false;
	}
}
