const { Node } = require('../LinkedList');

class LinkedListStack {
  constructor() {
    this._top = null;
  }

  push(value) {
    const node = new Node(value);
    if (!this._top) {
      this._top = node;
    } else {
      node.next = this._top;
      this._top = node;
    }
  }

  pop() {
    if (!this._top) {
      return null;
    }
    const value = this._top.value;
    this._top = this._top.next;
    return value;
  }

  clear() {
    this._top = null;
  }

  print() {
    let head = this._top;
    while (head) {
      console.log(head.value);
      head = head.next;
    }
  }
}

exports.LinkedListStack = LinkedListStack;
