const { test, expect } = require("@jest/globals");
const LinkedList = require("./singly-linked-list");

let list = new LinkedList();

describe("#Adding element", () => {
  test("Adds element at the end of list", () => {
    list.push(10);
    list.push(20);
    list.push(30);
    expect(list.size).toEqual(3);
  });
  test("First element is declared as head", () => {
    expect(list.first().value).toEqual(10);
  });
  test("Returns last element if exists else empty message", () => {
    expect(list.last().value).toEqual(30);
  });
});

describe("#Removing element", () => {
  test("Deletes element from the end of list", () => {
    list.pop();
    expect(list.size).toEqual(2);
  });
  test("Returns a message When list is empty", () => {
    list.pop();
    list.pop();
    expect(list.size).toEqual(0);
    expect(list.pop()).toEqual(null);
  });
  test("Returns true if list is empty, otherwise false", () => {
    expect(list.isEmpty()).toEqual(true);
  });
  test("Clear will remove all elements from list", () => {
    list.push(40);
    list.push(50);
    list.push(60);
    expect(list.size).toEqual(3);
    expect(list.first().value).toEqual(40);
    list.clear();
    expect(list.size).toEqual(0);
    expect(list.first()).toEqual(null);
  });
});
