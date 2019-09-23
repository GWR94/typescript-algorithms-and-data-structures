# Sorting Algorithms

Sorting is the process of rearranging the items in a data structure so that items are
in some kind of order. For example:
- Sorting numbers from smallest to largest
- Sorting strings alphabetically
- Sorting boolean values by true then false
- Sorting by array length.

Sorting is an incredibly common task, so its good to know how it works. There are many
different ways to sort things, and different techniques have their own advantages and
disadvantages.

## JavaScripts' Built-In `sort()`

When using the built-in `sort()` function can return strange results when sorting with
numbers. The reason for this is because by default the `sort()` order is sorting by
string unicode code points, which is essentially sorting alphabetically.

To use `sort()` in a numeric way, we can use a comparator function. This
comparator looks at pairs of elements, and then determines their sort order by checking
or comparing their return values like:
- If a is a negative number, and b is a positive number, a should be before b when sorting from smallest to highest values.
- If a is a positive number, and b is a negative number, a should be before b when sorting from highest to lowest values.
- if a and b are the same number, it doesn't matter if one value is ahead of another.

**Numeric Sorting:**
```typescript
/**
 * A comparator function which is used by the sort function to determine the placement of
 * each element in ascending order.
 * @param a - the first item to compare to the other (b).
 * @param b - the second item to compare to the other (a).
 */
function compareValues(a: number, b: number): number {
  /**
   * If a is smaller than b, a should come first
   */
  return a - b;
}

/**
 * Sort the array of numbers from smallest to largest using the compareValues function
 */
[4, 2, 6, 3].sort(compareValues); // [2, 3, 4, 6]
```

**Sort array by string size:**
```typescript
/**
 * If string a smaller than string b, string a should be placed before string b
 */
function compareLength(a: any, b: any): number {
  return a.length - b.length;
}

/**
 * Sort the array from smallest string size to largest string size.
 */
["Hello", "Test", "1", "Testtesttest"].sort(compareLength); // ["1", "Test", "Hello, "Testtesttest]
```
