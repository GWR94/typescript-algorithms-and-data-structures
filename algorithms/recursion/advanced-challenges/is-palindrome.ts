function isPalindrome(str: string): boolean {
	if (str[0] !== str[str.length - 1]) {
		console.log("Not a palindrome");
		return false;
	}
	if (str.length <= 1) {
		console.log("Palindrome");
		return true;
	}
	return isPalindrome(str.slice(1, -1));
}

isPalindrome("sabcddcbas");
