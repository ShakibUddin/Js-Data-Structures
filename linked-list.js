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
    this.tail = this.head;
    this.size = 0;
  }
  push(value) {
    let node = new Node(value);
    if (this.head === null) {
      this.head = node;
      this.tail = this.head;
    }
    else {
      node.previousNode = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
    return this.size;
  }
  pop() {
    let previousNode = this.tail.previousNode
    this.tail = previousNode;
    this.size--;
    return this.size;
  }
  first() {
    return this.head;
  }
  last() {
    return this.tail;
  }
}

module.exports = LinkedList;
