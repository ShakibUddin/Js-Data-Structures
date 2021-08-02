const { test, expect } = require("@jest/globals");
let [mergeSort, merge] = require("../algorithms/merge-sort");

test("sort array", () => {
  expect(mergeSort([-1, 2, 1, 0, 0, 0, -1])).toEqual([-1, -1, 0, 0, 0, 1, 2]);
  expect(mergeSort([3, 3, 2, 1])).toEqual([1, 2, 3, 3]);
  expect(mergeSort([0, -1, -1, 0, -1, -1])).toEqual([-1, -1, -1, -1, 0, 0]);
});

test("merges array to sort", () => {
  expect(merge([-1, 1, 2], [-1, 0, 0, 0])).toEqual([-1, -1, 0, 0, 0, 1, 2]);
  expect(merge([3, 3], [1, 2])).toEqual([1, 2, 3, 3]);
  expect(merge([-1, -1, -1, 0, 0], [-1])).toEqual([-1, -1, -1, -1, 0, 0]);
});
