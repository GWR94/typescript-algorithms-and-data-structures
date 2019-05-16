/**
 * Using an array and its built-in push and pop
 * methods are a way to mimic the functionality
 * of a stack. The pop method removes the last
 * element from the "stack", and the push method
 * adds to the end of the "stack".
 */

const stack: any[] = [];
stack.push("Google");
stack.push("Instagram");
stack.push("YouTube");
stack.pop();
stack.pop();

/**
 * You can also do the same in reverse by using
 * the shift and unshift methods for adding and
 * removing elements at the start of the "stack".
 */
const stackReverse: any[] = [];
stackReverse.unshift("GitHub");
stackReverse.unshift("Udemy");
stackReverse.unshift("StackOverflow");
stackReverse.shift();
stackReverse.shift();

/**
 * Using the stackReverse technique with shift
 * and unshift is much less efficient than using
 * stack with pop and push. The reason for this
 * is that if we are adding/removing from the
 * beginning then all of the other elements in the
 * stack/array have to be reindexed, compared to
 * adding/removing from the end where nothing has
 * to be reindexed.
 */
