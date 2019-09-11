/**
 * A function which returns a new object based on the parameter obj, with values that are
 * numbers converted to strings.
 * @param obj - the original objects that will be transformed into a new object with the
 * numbers converted to its string equivalent
 */
function stringifyNumbers(obj): object {
  const newObj = {}; // create a new object to store the new values to.
  // loop through all of the keys in obj.
  for (const key in obj) {
    // if obj[key] is of type number, set that value in newObj, but convert it to a string
    if (typeof obj[key] === "number") {
      newObj[key] = obj[key].toString();
      /**
       * If obj[key] is of type object, but it is not an array, then stringifyNumbers() needs
       * to be run on that object to push those values into newObj. The returned value should
       * be set to the newObj[key] value to match the structure or obj.
       */
    } else if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      newObj[key] = stringifyNumbers(obj[key]);
    } else {
      /**
       * if it's neither an object or a number, set the value to of obj[key] to newObj[key],
       * so it matches obj's structure.
       */
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

const obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};
console.log(stringifyNumbers(obj));
/**
 * {
    num: "1",
    test: [],
    data: {
      val: "4",
      info: {
        isRight: true,
        random: "66",
      },
    },
  };
 */
