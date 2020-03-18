class ArrayStack {
  constructor() {
    this._list = [];
  }

  push(value) {
    this._list.push(value);
  }

  pop() {
    return this._list.pop();
  }

  clear() {
    this._list = [];
  }
}

exports.ArrayStack = ArrayStack;
