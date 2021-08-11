const { test, toBe } = require("@jest/globals");
const { kmp, fillPiTable } = require("../algorithms/kmp");

test("Generates pi table for kmp", () => {
  expect(fillPiTable("aabaabaaa", [])).toEqual([0, 1, 0, 1, 2, 3, 4, 5, 2]);
  expect(fillPiTable("abcaby", [])).toEqual([0, 0, 0, 1, 2, 0]);
  expect(fillPiTable("ab", [])).toEqual([0, 0]);
  expect(fillPiTable("aa", [])).toEqual([0, 1]);
  expect(fillPiTable("a", [])).toEqual([0]);
});

test("Check a pattern exists in another string", () => {
  expect(kmp("abxabcabcaby", "abcaby")).toBe(true);
  expect(kmp("abcabcaabac", "abb")).toBe(false);
  expect(kmp("aa", "aa")).toBe(true);
  expect(kmp("aa", "a")).toBe(true);
  expect(kmp("a", "a")).toBe(true);
  expect(kmp("aa", "b")).toBe(false);
  expect(kmp("a", "b")).toBe(false);
  expect(kmp("a", "")).toBe(false);
  expect(kmp("", "b")).toBe(false);
});
