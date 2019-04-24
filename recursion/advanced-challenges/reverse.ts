function reverse(str: string) {
	/**
	 * If the length of the string is 1 or less, then
	 * there is no need to reverse it at all.
	 */
	if (str.length <= 1) return str;
	/**
	 * If it's longer, then we need to take the first
	 * letter from str add it to the reverse function,
	 * with the first letter taken off str via slicing
	 * it - str.slice(1);
	 */
	return reverse(str.slice(1)) + str[0];
}

console.log(reverse("hello"));
