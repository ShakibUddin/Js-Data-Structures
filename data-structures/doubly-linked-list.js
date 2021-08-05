class Node {
  constructor(value = null) {
    this.value = value;
    this.previous = null;
    this.next = null;
  }
}
class DoublyLinkedList {
  constructor() {
    this._head = null;
    this._tail = this._head;
    this._size = 0;
  }
  isEmpty() {
    return this._size === 0;
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
      node.previous = this._tail;
      this._tail.next = node;
      this._tail = node;
    }
    this._size++;
    return this._size;
  }
  pop() {
    let node = this._tail;
    this._tail = this._tail.previous;
    this._tail.next = null;
    this._size--;
    return node;
  }
  get first() {
    return this._head;
  }
  get last() {
    return this._tail;
  }
  clear() {
    this._head = null;
    this._tail = null;
    this._size = 0;
    return this._size;
  }
}

module.exports = DoublyLinkedList;
