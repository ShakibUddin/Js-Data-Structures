const LinkedList = require("./singly-linked-list");

class Queue {
  constructor() {
    //using linked list to implement queue
    this.items = new LinkedList();
  }

  get size() {
    return this.items.size;
  }

  isEmpty() {
    return this.items.size === 0;
  }

  enqueue(value) {
    this.items.push(value);
    return this.items.size;
  }

  dequeue() {
    //remove from head
    return this.items.removeHead();
  }

  clear() {
    return this.items.clear();
  }
}

module.exports = Queue;
