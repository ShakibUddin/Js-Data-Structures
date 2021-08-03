const Queue = require("../data-structures/queue");
const { test, toBe } = require("@jest/globals");

let queue = new Queue();
describe("#add item in queue", () => {
  test("adds item at the end", () => {
    expect(queue.enqueue(10)).toBe(1);
  });
  test("returns queue size", () => {
    queue.enqueue(20);
    queue.enqueue(30);
    expect(queue.size).toBe(3);
  });
  test("Removes head from queue and returns it, also decreases size", () => {
    expect(queue.dequeue().value).toBe(10);
    expect(queue.size).toBe(2);
  });
  test("CLears queue and return size", () => {
    expect(queue.clear()).toBe(0);
  });
  test("Returns true if queue is empty", () => {
    queue.enqueue(40);
    queue.enqueue(50);
    queue.clear();
    expect(queue.isEmpty()).toBe(true);
  });
});
