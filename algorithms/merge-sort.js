function mergeSort(array) {
  let n = array.length;
  if (n === 1) return array;
  let arrayA = mergeSort(array.slice(0, n / 2));
  let arrayB = mergeSort(array.slice(n / 2, n));

  return merge(arrayA, arrayB);
}

function merge(arrayA, arrayB) {
  let i = 0,
    j = 0;
  let arrayC = [];
  while (i < arrayA.length && j < arrayB.length) {
    if (arrayA[i] <= arrayB[j]) {
      arrayC.push(arrayA[i]);
      ++i;
    } else {
      arrayC.push(arrayB[j]);
      ++j;
    }
  }
  if (i < arrayA.length) {
    for (item of arrayA.slice(i)) {
      arrayC.push(item);
    }
  } else if (j < arrayB.length) {
    for (item of arrayB.slice(j)) {
      arrayC.push(item);
    }
  }
  return arrayC;
}

module.exports = [mergeSort, merge];
