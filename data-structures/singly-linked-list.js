class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previousNode = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  push(value) {
    let node = new Node(value);
    if (this.head === null) {
      this.head = node;
      this.tail = this.head;
    } else {
      node.previousNode = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
    return this.size;
  }
  pop() {
    if (this.size === 0) return null;
    this.tail = this.tail.previousNode;
    this.size--;
    if (this.size === 0) {
      this.head = null;
      this.tail = null;
    }
    return this.size;
  }
  first() {
    return this.head;
  }
  last() {
    return this.tail;
  }
  isEmpty() {
    return this.size === 0 ? true : false;
  }
  clear() {
    this.head = null;
    this.tail = null;
    this.size = 0;
    return this.size;
  }
}

module.exports = LinkedList;
