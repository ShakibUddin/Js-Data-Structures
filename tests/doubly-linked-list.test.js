const { test, toBe } = require("@jest/globals");
const DoublyLinkedList = require("../data-structures/doubly-linked-list");

let list = new DoublyLinkedList();

describe("#Add items(Doubly linked list", () => {
  test("Adds item at the end of list", () => {
    expect(list.push(10)).toBe(1);
  });
  test("First pushed item is declared as head and tail", () => {
    expect(list.first.value).toBe(10);
    expect(list.last.value).toBe(10);
  });
  test("Push increases list size and new node is the tail", () => {
    list.push(20);
    expect(list.size).toBe(2);
    expect(list.last.value).toBe(20);
  });
});

describe("#Remove items(Doubly Linked List)", () => {
  test("Pop removes last item", () => {
    expect(list.pop().value).toBe(20);
  });
  test("Pop decreases list size by 1", () => {
    expect(list.size).toBe(1);
  });
  test("Pop declares new tail", () => {
    expect(list.last.value).toBe(10);
  });
  test("Clears whole list", () => {
    expect(list.clear()).toBe(0);
    expect(list.isEmpty()).toBe(true);
    expect(list.first).toBe(null);
    expect(list.last).toBe(null);
  });
});
