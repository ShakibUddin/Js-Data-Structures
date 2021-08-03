class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previousNode = null;
  }
}
class LinkedList {
  constructor() {
    this._head = null;
    this._tail = null;
    this._size = 0;
  }
  get size() {
    return this._size;
  }
  push(value) {
    let node = new Node(value);
    if (this._head === null) {
      this._head = node;
      this._tail = this._head;
    } else {
      node.previousNode = this._tail;
      this._tail.next = node;
      this._tail = node;
    }
    this._size++;
    return this._size;
  }
  pop() {
    if (this._size === 0) return null;
    let tail = this._tail;
    this._tail = this._tail.previousNode;
    this._size--;
    if (this._size === 0) {
      this._head = null;
      this._tail = null;
    }
    return tail;
  }
  get first() {
    return this._head;
  }
  get last() {
    return this._tail;
  }
  removeHead() {
    let head = this._head;
    let newHead = this._head.next;
    this._head = newHead;
    this._size--;
    return head;
  }
  isEmpty() {
    return this._size === 0;
  }
  clear() {
    this._head = null;
    this._tail = null;
    this._size = 0;
    return this._size;
  }
}

module.exports = LinkedList;
