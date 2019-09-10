# Recursion

Recursion is a process (a function in the case of JavaScript), which calls itself
multiple times until the desired value is found, or "base cases" are met to end the
function.

To fully understand how recursion works you need to understand what is being done behind
the scenes in the JavaScript engine - mainly the call stack.

## Call Stack

In almost all programming languages there is a complex data structure which manages what
happens when functions are invoked. In JavaScript this data structure is called the call
stack. 

Any time a function is invoked, it is placed (pushed) onto the top of call stack.
When the JavaScript engine sees the return keyword, or when the function ends, the compiler
will remove (pop) it from the call stack. The call stack is a FIFO (First-In First-Out)
data structure, so only the top element can be executed at one time. You can think of 
the call stack as like a stack of paper, i.e you can only see the top page, and you 
can't see the pages below unless you remove the top page.

The reason why knowing about the the call stack is important when using recursive functions
is because it alters the way the call stack is generally utilised. In iterative solutions
the call stack pops off functions as they are completed, however with recursive solutions
the same function is placed on top of the current function, without the current function
being popped off the stack.

When a function makes a nested call, the following happens: 
- The current function is paused.
- The execution context associated with the current function is remembered in a special data
structure called the execution context stack.
- The nested call executes.
- After it ends, the old execution context is retrieved from the stack, and the outer function
is resumed from where it stops.

## Creating a Recursive function

Before creating a recursive function you need to consider a couple of things:

**Base Case** - A base case is the condition where the recursion ends to avoid an infinite
loop. There's no standard base case, the conditions need to be set based on the function
itself.

**Different Inputs** - Over each recursive call there needs to be different inputs,
otherwise the function will repeatedly call the same function with the same values and
it will create an infinite loop. 

### Simple Example

The simplest recursive function you can create is counting down from num to zero. Each
time the function is called, the num will be logged to the console, and then the function
will call itself with one subtracted from the current number, until the base case is met
(num is equal to or less than 0).

```typescript
function countDown(num): void {
  if (num <= 0) { // Base case - If num is 0 or less, return as we only want to count down to zero.
    console.log("All Done!");
    return;
  }
  console.log(num);
  countDown(num - 1); // Recursively call the function with different inputs.
}

countDown(10); // 10 9 8 7 6 5 4 3 2 1 All Done!
```

Every time the function is invoked it checks to see if it passes the base case. If it
doesn't, it will `console.log` num, and invoke another function call of itself with 1 
subtracted from num. If it does, then "All Done!" is logged to the console, and the
function is completed.

### Example 2

Another example of a recursive function is summing the range from 0 to n, where n is the
input value. For example if 3 was input, it would output 6 (1 + 2 + 3).

```typescript
function sumRange(num): number {
  if (num === 1) return num; // Base Case
  return num + sumRange(num - 1); // Different Inputs
} 

sumRange(3); // 6
```

The difference with this recursive function is that it has to wait for the function calls above it
in the call stack to finish executing before a value is actually found to be used for the addition. For example, 
`num + sumRange(num - 1)` has no value until the base case condition is true (num = 1).

**Step By Step**

1.  `sumRange(3)` is called, which returns `3 + sumRange(2)`. We don't have a value
for the return value of `sumRange(2)` yet, so the function has to wait for `sumRange(2)` to finish
before the function can be completed.
2.  `sumRange(2)` is called, which returns `2 + sumRange(1)`. Once again, we don't yet
have the value for `sumRange(1)`, so we have to wait for the value to return before it can be
completed.`sumRange(3)` and `sumRange(2)` are still not popped off the call stack, and 
`sumRange(1)` is added to the top of the call stack.
3.  The base case condition is now true - num equals 1, so we can return the 1. Returning this 1
pops `sumRange(1)` off the call stack, which means `sumRange(2)` can now finish its execution, as it
was waiting for the value from `sumRange(1)` to add to num.
4.  `sumRange(2)` now has the 1 returned from `sumRange(1)`, so it can return 3 (2 + 1). 2 being the
current value of num, and 1 being the value returned from `sumRange(1)`. `sumRange(2)` can now be
popped of the call stack.
5.  `sumRange(3)` now has the value to complete the function. The 3 which was returned from
`sumRange(2)` can be added to the original num (3) to return 6. `sumRange(3)` is now popped off
the call stack, and the function is completed.

## Iterative vs Recursive

The following example will be creating a factorial function, both iteratively and recursively.

**Iteratively:**

```typescript
function factorial(num): number {
  let total = 1;
  while (num > 1) {
    total *= num;
    num--;
  }
  return total;
}

factorial(3); // 3 * 2 * 1 = 6
```

**Recursively:**
```typescript
function factorial(num): number {
  if (num === 1) return num; // base case
  return num * factorial(num - 1); // different input each time
}

factorial(3); // 3 * 2 * 1 = 6
```

The benefits of using iteration over recursion is that it often uses less resources,
however the recursive solutions are normally closer to the given formula, and therefore
increases legibility.

## Debugging Recursive Solutions

Creating infinite loops in recursive functions can happen. To avoid these issues you need
to make sure there are base case(s), and they return at the correct point with the correct
values. If there are no base cases, the function will run until you reach the maximum call
stack, which will crash the function without completion. 

Forgetting to return, or returning the wrong values is also another way to create an unwanted
infinite loop. Care should be taken to return at the right points, with the right values 
necessary to complete the task.

## Helper Method

A helper method is wrapping your recursive function inside another function - normally to
help contain values through each recursion. In the following function the `collectOdds()` function is the
wrapper which contains the results array - which will have all of the odd values in it. The
`helper()` function a recursive function which checks the first value of the array,
and pushes it to the results value if it is odd. It then removes the first element from the
array and recursively checks the array until it is empty.

```typescript
function collectOdds(arr: number[]): number[] {
  const result = []; // keeps values in memory through each recursion.
  function helper(helperArr: number[]): void {
    // base case - end if helper array is empty
    if (helperArr.length === 0) return;
    // if the first value is odd, push it to the results array.
    if (helperArr[0] % 2 !== 0) {
      result.push(helperArr[0]);
    }
    // remove the first element from the array, and run the helper function until helperArr is empty
    return helper(helperArr.slice(1));
  }
  // invoke the helper function
  helper(arr);
  // return the results array with all odd numbers
  return result;
}

collectOdds([1, 2, 3, 4, 5]); // [1,3,5]
```

## Pure Recursion

Pure recursion is a recursive function that is self contained, and without an external data
structure. Pure functions cannot contain a wrapper function to hold values. The previous example
can be completed with pure recursion, however it can be a bit harder to visualise what is actually
happening without explanation:

```typescript
function collectOdds(arr: number[]): number[] {
  let newArr: number[] = []; // new array initialised through every recursion.
  if (arr.length === 0) {
    // base case - if arr is empty, return newArr as function is complete
    return newArr; 
  }
  if (arr[0] % 2 !== 0) {
    // if the first item in arr is odd, push it to newArr.
    newArr.push(arr[0]);
  }
  // set newArr to be a concatenation of all of collectOdds() newArr's at the end of the recursion.
  newArr = newArr.concat(collectOdds(arr.slice(1)));
  return newArr;
}

collectOdds([1, 2, 3, 4, 5]); // [1,3,5]
```

1. Through the first recursion newArr will be `[1]` as 1 is an odd number. newArr is then set to be
newArr concatenated to the result of `collectOdds(arr.slice(1))`. The value returned form the function is
`[1].concat(collectOdds(arr.slice(1))`. This triggers the second recursion in the problem, but the first
recursion is kept because it doesn't have the value from `collectOdds(arr.slice)` yet.

2. `collectOdds(arr.slice(1))` is then executed, which will check arr (which is now `[2,3,4,5]`). 
Through this recursion the first value is not odd, so nothing is pushed to the newArr, but newArr (`[]`) will still
be concatenated with the value of `collectOdds(arr.slice(1))`. Once again, there is no returned value from 
`collectOdds` yet, so it's not popped from the call stack. This recursion is essentially returning
`[].concat(collectOdds(arr.slice(1)))` to the first recursion, once a value is returned from the next
recursion. 

3. The new recursion is now checking `[3,4,5]`. 3 is odd, so it is pushed into newArr. 
`newArr = newArr.concat(collectOdds(arr.slice(1)))` is called, to trigger another recursion. 
Once again, there return value from `collectOdds()` is not available yet, so it's not popped 
from the call stack.

4. The new recursion is now checking `[4, 5]`, which isn't odd - so we repeat step 2.

5. The new recursion is now checking `[5]`. 5 is odd, so it's pushed to newArr. 
`newArr = newArr.concat(collectOdds(arr.slice(1)))` is then called again.

6. The base case is met (`arr.length === 0`). This means the value of newArr is returned
to the previous recursion. newArr is an empty array through this recursion, so in the previous
recursion we are concatenating [] with the value of newArr from the previous recursion (`[5]`).
Once the value has been returned, the function is popped from the call stack, and the next
recursion can be completed and popped.

7. Now all of the values are available to concatenate together - By the time we get back to the
first recursion we are returning concatenation of `[] + [1] + [] + [3] + [] + [5] + []`, which
returns `[1, 3, 5]`.