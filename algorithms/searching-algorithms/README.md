# Searching Algorithms

There are many different ways to search a data structure. Some data structures have built-in
searching algorithms, such as `indexOf()` or `find()` for searching arrays. You can use
different types of searches - such as binary or linear searching - with different time
complexities for each.

## Linear Searching
A linear search is simply going through each element in the data structure to check if the
element matches the target element. As the name suggests, linear searching has a linear /
$O(n)$ time complexity.

An example of a linear search is a simple for loop, which searches for a value in an array:

```typescript
function indexOf(arr: any[], val: any): any {
  for(let i=0; i<arr.length; i++) {
    if(arr[i] === val) return i; // if the value is present at index i of arr, return i.
  }
  return -1; // if val is not present in arr, return -1
}
```

### Big O Notation of Linear Search

The best case scenario of a linear search is $O(1)$ / constant time complexity - if we find
the value in the first index. The worst case scenario for the linear search is linear / $O(n)$
time complexity - if the value is found at the last index, or not at all. The average (and all
that we really care about) is still $O(n)$ / linear time complexity, as we cannot determine
when/if the value will actually be found, so we round up to the max possible trend. For example,
if the item was found in the at index 3 of a 12 index array, that was *techincally* be a $O(0.25n)$
time complexity, however it will still always be referenced as $O(n). Similarly, if we had to execute two loops
of an array to retrieve the correct result, that would *technically* be a time complexity of $O(2n)$, however it will still be
rounded to the nearest trend, which is $O(n)$.

## Binary Search
A binary search is generally much faster than a lineal search, as it's a divide and conquer algorithm - however the limitations of a binary search
is that the data structure **must** be sorted. In a binary search check to see if the middle element in the
data structure is the target value. If the middle is the value, return it; if it's not the you check to see
if the value is larger or smaller than the target value. If the value is larger than the mid value, then the
value is either in the right sub-array, or not in there at all - so we need to check the right part of the
array, and discard the left part. if it's smaller, the right side of mid is discard, and the left sub-array
is left to check for the value.

There are two ways to complete a binary search - iteratively and recursively:

**Iteratively**
```typescript
function binarySearch(arr, num): number {
  let min = 0; // set min to be the first element to begin with
  let max = arr.length - 1; // set max to be the last index to begin with.
  while (min <= max) { // continue looping while min is less than or equal to max
    const mid = Math.floor((min + max) / 2); // get the index of the middle value
    if (arr[mid] === num) return mid; // check to see if the index of mid is the target value
    arr[mid] > num 
      // if num is smaller than mid, set the max to be mid - 1 to search the left part of the array.
      ? (max = mid - 1) 
      // if num is equal to or greater than mid, set min to be mid + 1 to search the right part.
      : (min = mid + 1); 
  }
  // if the target num is not found, return -1.
  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 7); // 6
```

**Recursively**
```typescript
function binarySearch(arr, num, min = 0, max = arr.length - 1): number {
  if (min > max) return -1; // base case - if min is larger than max, then the value isn't in arr.
  const mid = Math.floor((min + max) / 2); // set mid to be the middle value of min and max
  if (arr[mid] === num) return mid; // if arr[mid] is the correct value, return mid.
  return arr[mid] < num
    // if num is larger than arr[mid], set min to mid + 1 to search right side of arr.
    ? binarySearch(arr, num, mid + 1, max)
    // if num is equal to or smaller than arr[mid], set max to mid - 1 to search left side of arr.
    : binarySearch(arr, num, min, mid - 1);
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 7); // 6
```

### Recursive Step-By-Step
The min/max/mid cells hold the index, with the actual value in brackets. `arr` and `num`
are still the same as above (`[1,2,3,4,5,6,7,8]` and `7`).

| step  |  min  |  max  |  mid  |  check side   |         arr         |
| :---: | :---: | :---: | :---: | :-----------: | :-----------------: |
|   1   | 0 (1) | 7 (8) | 3 (4) | right (7 > 4) | `[1,2,3,4,5,6,7,8]` |
|   2   | 4 (5) | 7 (8) | 5 (6) | right (7 > 6) |     `[5,6,7,8]`     |
|   3   | 6 (7) | 7 (8) | 6 (7) |   num found   |       `[7,8]`       |

### Big O Notation of Binary Search
The best case scenario for a binary search is constant / $O(1)$ time complexity, which occurs
if the target value is found in the first recursion (it's in the middle of the array).

The worst (and average) case is logarithmic / $O(log n)$ time complexity, 