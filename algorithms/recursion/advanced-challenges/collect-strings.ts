/**
 * A recursive function that takes an object as a parameter, and returns an array
 * of all of the strings in that object.
 * @param obj - the object which will contain strings and other values.
 */
export function collectStrings(obj): string[] {
  /**
   * Initialise an array to store the strings from obj into it.
   */
  let strings = [];
  /**
   * Search all keys in obj
   */
  for (const key in obj) {
    if (typeof obj[key] === "string") {
      /**
       * if obj[key] is of type string, push it into the strings array.
       */
      strings.push(obj[key]);
    } else if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      /**
       * if obj[key] is of type object, but not an array, run collectStrings() on that
       * object to obtain the strings from that object, and concat the result of it
       * to the current strings array.
       */
      strings = strings.concat(collectStrings(obj[key]));
    }
  }
  return strings;
}

const x = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};
console.log(
  collectStrings(x), // ["foo", "bar", "baz"])
);
