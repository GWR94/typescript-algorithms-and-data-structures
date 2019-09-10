# Problem Solving Patterns

## Frequency Counters

The frequency counter pattern uses objects or sets to collect values, or frequencies of
values. This can often lead to avoiding nested loops (or quadratic / $O(n^2)$ time 
complexity). Frequency counters are usually linear / $O(n)$ time complexity.

The following example is comparing two arrays to see if arr1 has the same values as arr2
if the values are squared. There will be a naive ($O(n^2)$ / quadratic time complexity),
and a frequency counter example. 

When using a frequency counter to compare two arrays you create an object to store the
number of times a value appears in each array, and compares the two counters to see if
they are the same.

**Quadratic/Naive Solution**
In this solution the time complexity is quadratic because the `indexOf()` method is of
linear time complexity, and it is inside another linear time complexity for loop.
```typescript
function sameSquared(arr1: any[], arr2: any[]): boolean {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    /**
     * Loop through arr1, and check if the value of i in arr1 is present in arr2, but with
     * the value squared (via indexOf()). If it isn't, return false. If the loop is completed
     * then all of the values match up, so return true.
     */  
    if (arr2.indexOf(arr1[i] ** 2) === -1) {
      return false;
    }
  }
  return true;
}

sameSquared([4, 6, 9, 10], [100, 36, 81, 16]); // true
sameSquared([1, 2, 3, 4], [2, 4, 8, 12]) // false
```

**Frequency Counter Solution**
```typescript
function sameSquared(arr1: number[], arr2: number[]): boolean {
  if (arr1.length !== arr2.length) return false;
  const count1: Counter = {};
  const count2: Counter = {};
  for (let i = 0; i < arr1.length; i++) {
    const val1 = arr1[i];
    const val2 = arr2[i];
    count1[val1] = (count1[val1] || 0) + 1;
    count2[val2] = (count2[val2] || 0) + 1;
  }

  for (const key in count1) {
    /** 
     * if the key from count1 squared is not a key in count2, then the arrays are
     * clearly different, so return false
     */ 
    if (!(key ** 2 in count2)) return false;
    /**
     * If count1[key] does not have an equal frequency as count2[key ** 2] then the
     * arrays are clearly different, so return false
     */
    if (count1[key] !== count2[key ** 2]) return false;
  }
  return true;
}

sameSquared([1, 2, 3, 4, 5], [1, 25, 4, 9, 16]); // true
```

## Divide & Conquer

The divide and conquer pattern involves dividing a data set into smaller chunks, and then
repeating the process with the smaller chunks of data. The pattern *can* tremendously reduce
the time complexity, depending on the problem - but not always.

The following example is searching a sorted array for a value specified in the functions
parameters. There will be a naive / linear time complexity solution, and a
divide and conquer solution with a logarithmic time complexity / $O(n\log{}n)$.


**Linear/Naive Solution**

The "naive" solution is simply a for loop, going through all of the items in the array
until the correct value is found, or if the value is not found `return -1`.
```typescript
function search(arr, num): number {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return i;
    }
  }
  return -1;
}

search([1, 2, 3, 7, 11, 23], 23);
```

**Divide and Conquer Solution**

The divide and conquer solution is a binary search, where you split the array in half and
check if the middle index is the correct value. If it's not, you move the min or max
values accordingly, and check for a match in the middle value of the new half sized sub-array, 
and recursively  continue until the min is equal to or greater than max (the array is fully
checked and the value is not found).

```typescript
function binarySearch(arr, num): number {
  let min = 0;
  let max = arr.length - 1;
  while (min <= max) {
    const middle = Math.floor((min + max) / 2);
    if (arr[middle] === num) return middle;
    arr[middle] < num ? (min = middle + 1) : (max = middle - 1);
  }
  return -1;
}

binarySearch([1, 2, 3, 7, 11, 23], 23);
```

Another example is returning the amount of zeroes in an array, where all the previous values
are 1's. Once again, the "naive" solution will be of linear time complexity, whereas the divide and conquer
algorithm will be logarithmic.

**Linear/Naive Solution**

The "naive" solution is to just loop through all of the values, and add one to the zeroes
variable every time one is found.
```typescript
function countZeroesLinear(arr: number[]): number {
  let zeroes = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) zeroes++;
  }
  return zeroes;
}

countZeroes([1, 1, 0]);
```
**Divide and Conquer Solution**

The divide and conquer solution checks the middle value of the array, and checks if it is
a 1. If it is, then we need to move the min value to the value of mid + 1, as all of the 
preceding values must also all be 1's. If the value is a 0, the max should be set to mid - 1, as there could be other preceding 0's in the array. After each iteration the mid value
of the array is checked to see if it's a 0, and if it is the value before should be checked
if it's a 1. If it is, then we return the length of the array - mid to get the amount of zeroes
in the array. If it's not, then we continue until the first 0 is found, or the array has been
fully checked for 0's (min is equal to or greater than max).
```typescript
function countZeroes(arr: number[]): number {
  let min = 0;
  let max = arr.length - 1;
  if (arr[min] === 0) return arr.length; // If the first element is a 0, all of the others must be.
  while (min <= max) {
    const mid = Math.floor((min + max) / 2); // Get mid value to check
    /**
     * If arr[mid] is 0 and arr[mid-1] is 1, then the this must be the first zero, so we
     * subtract mid from the arrays' length and return it.
     */
    if (arr[mid] === 0 && arr[mid - 1] === 1) {
      return arr.length - mid;
    }
    arr[mid] === 1 ? (min = mid + 1) : (max = mid - 1); // Half the amount of elements to check
  }
  return 0;
}

countZeroes([1, 1, 1, 1, 0, 0]) // 2
countZeroes([]) // 0
countZeroes([1, 1, 1, 1, 1, 1]); // 0   
countZeroes([1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]); // 13
```

Whilst the linear search is much easier to implement, using the divide and conquer approach
has a drastic impact on the amount of computations to complete the task, and therefore a much
more efficient execution time and time complexity. For example, if we ran the 
`countZeroes([1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])` using the linear search, it will
take 15 computations to complete the search, whereas using the divide and conquer approach it will
only take 4 computations. If the arrays were larger, the difference in computations would become 
exponentially larger too.

## Sliding Windows

The sliding windows patterns involves creating a 'window' which can either be an array or
number from one position to another. Depending on the position, the window either increases
or closes, and a new window is created.

The sliding window pattern can be very useful for keeping track of a subset of data from a
string or an array.

In the following example, the goal is to create a function to that finds the max value of
a sub array of n size, from one fully unsorted array. The first "naive" approach will be
$O(n^2)$ / quadratic time complexity. The sliding windows pattern has a $O(n)$ / linear
time complexity, which is much more efficient.

**Quadratic/Naive Solution**
```typescript
function maxSubArrayCount(arr: number[], size: number): number {
  if (size > arr.length) return null;
  let max = -Infinity;
  for (let i = 0; i < arr.length - size + 1; i++) {
    let count = 0;
    for (let j = i; j < i + size; j++) {
      count += arr[j];
    }
    max = Math.max(count, max);
  }
  return max;
}

maxSubArrayCount([1, 11, 2, 9, 7, 5, 100], 3); // Returns 112 (7 + 5 + 100)
maxSubArrayCount([1, 11, 2, 9, 7, 5, 100], 2); // Returns 105 (5 + 100)
```

**Sliding Windows Solution**
```typescript
function maxSubArrayCount(arr: number[], size: number): number {
  if (size > arr.length) return null;
  let max = -Infinity;
  let temp = 0;
  for (let i = 0; i < size; i++) {
    temp += arr[i];
  }
  max = temp;
  for (let i = size; i < arr.length; i++) {
    temp = temp - arr[i - size] + arr[i];
    /**
     * temp - arr[i-size] subtracts the first number from the previous subarray.
     * + arr[i] adds the next value into the arrow to equal the value of the new
     * sub array
     */
    max = Math.max(temp, max);
  }
  return max;
}

maxSubArrayCount([1, 11, 2, 9, 7, 5, 100], 3); // Returns 112 (7 + 5 + 100)
maxSubArrayCount([1, 11, 2, 9, 7, 5, 100], 2); // Returns 105 (5 + 100)
```