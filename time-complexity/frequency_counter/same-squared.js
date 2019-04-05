function sameFreqCounter(arr1, arr2) {
    const count1 = {};
    const count2 = {};
    for (let val of arr1) {
      count1[val] = (count1[val] || 0) + 1;
    }
    for (let val of arr2) {
      count2[val] = (count2[val] || 0) + 1;
    }
    for (let key in count1) {
      if (!(key ** 2 in count2)) return false;
      if (count2[key ** 2] !== count1[key]) return false;
    }
    return true;
  }
  