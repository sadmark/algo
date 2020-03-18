const { Node } = require('../LinkedList');

class LinkedListQueue {
  constructor() {
    this._head = null;
    this._tail = null;
  }

  enqueue(value) {
    const node = new Node(value);
    if (!this._head) {
      this._head = node;
    } else {
      this._tail.next = node;
    }
    this._tail = node;
  }

  dequeue() {
    if (!this._head) {
      return null;
    }
    const head = this._head;
    this._head = this._head.next;
    return head;
  }

  clear() {
    this._head = null;
    this._tail = null;
  }

  print() {
    let head = this._head;

    while (head) {
      console.log(head.value);
      head = head.next;
    }
  }
}

exports.LinkedListQueue = LinkedListQueue;
