/**
 * A recursive function which adds all of the nested numbers which are even together,
 * and returns it.
 * @param obj - the object which contains a variety of values
 * @param sum  - the total sum of even numbers in the object.
 */
function nestedEvenSum(obj, sum = 0): number {
  // search every key in the object
  for (const key in obj) {
    if (typeof obj[key] === "object") {
      /**
       * if the key value is of type object, flatten it by executing another nestedEvenSums() with
       * obj[key] as the parameter. This will then loop through all of the keys and check for
       * even numbers in that, which can be repeated if necessary.
       */
      sum += nestedEvenSum(obj[key]);
      /**
       * If the key value is of type number, and that number is even, add the number to the total
       * sum.
       */
    } else if (typeof obj[key] === "number" && obj[key] % 2 === 0) {
      sum += obj[key];
    }
  }
  /**
   * return the total value of the even numbers
   */
  return sum;
}

const obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

const obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" },
};

console.log(
  nestedEvenSum(obj1), // 6
  nestedEvenSum(obj2), // 10
);
