function swap(arr, idx1, idx2): any[] {
  const temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
  return arr;
}

function bubbleSort(arr): any[] {
  let noSwaps;
  for (let i = 0; i < arr.length; i++) {
    noSwaps = true;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        noSwaps = false;
        swap(arr, i, j);
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

function merge(arr1, arr2): any[] {
  const res = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] > arr2[j]) {
      res.push(arr2[j]);
      j++;
    } else {
      res.push(arr1[i]);
      i++;
    }
  }
  while (i < arr1.length) {
    res.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    res.push(arr2[j]);
    j++;
  }
  return res;
}

function mergeSort(arr): any[] {
  if (arr.length === 1) return arr;
  const mid = arr.length / 2;
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

console.log(mergeSort([2, 1, 42, 6, 111, 23, 855, 20]));
