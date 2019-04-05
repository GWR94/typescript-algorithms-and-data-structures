function same(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    const char = arr1[i];
    const index = arr2.indexOf(char ** 2);
    if (index === -1) return false;
    arr2.splice(index, 1);
  }
  return true;
}

console.log(
  same([1, 3, 2, 2, 5], [1, 4, 4, 9, 25]),
);
