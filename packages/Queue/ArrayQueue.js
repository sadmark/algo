class ArrayQueue {
  constructor() {
    this._list = [];
  }

  push(value) {
    this._list.push(value);
  }

  pop() {
    return this._list.shift();
  }

  clear() {
    this._list = [];
  }
}

exports.ArrayQueue = ArrayQueue;
