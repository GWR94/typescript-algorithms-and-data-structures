function anagram(str1, str2) {
  const lookup = {};
  if (str1.length !== str2.length) return false; // if strings aren't the same length, it cannot be an anagram, so return false.
  for (let i = 0; i < str1.length; i++) {
    let letter = str1[i];
    lookup[letter] = lookup[letter]
      ? (lookup[letter] += 1) // if there is already a value for the letter key, add one to it
      : (lookup[letter] = 1); // if the value doesn't exist, then initialise it at 1.
  }
  for (let i = 0; i < str2.length; i++) {
    let letter = str2[i];
    if (!lookup[letter]) { // if letter isn't in the object, or its value is zero, return false.
      return false;
    }
    lookup[letter] -= 1; // else take one away from its value and continue loop.
  }
  return true; //if loop is completed without returning false, then it's an anagram so return true.
}
anagram("abcdca", "abacdc"); // true
anagram("iceman", "cinema"); // true
anagram("abc", "cbaa"); // false