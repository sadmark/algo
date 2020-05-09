const { Node } = require('../LinkedList');

class HashMap {
  constructor(capacity = 16) {
    this.capacity = capacity;
    this.table = new Array(capacity);
  }

  hash(key) {
    let val = 0;
    for (let i = 0, len = key.length; i < len; i += 1) {
      const char = key.codePointAt(i);
      val += char;
    }
    return val % this.capacity;
  }

  get(key) {
    const index = this.hash(key);
    if (!this.table[index]) return null;
    let current = this.table[index];
    while (current.next) {
      current = current.next;
      if (current.value.key === key) {
        return current.value.data;
      }
    }
    return null;
  }

  put(key, data) {
    const index = this.hash(key);
    if (!this.table[index]) this.table[index] = new Node('head');
    let current = this.table[index];
    let existed = false;
    while (current.next) {
      current = current.next;
      // 查看是否存在
      if (current.value.key === key) {
        existed = true;
        break;
      }
    }

    // 已经有这个key就更新数据
    // 否则就是新增
    if (existed) {
      current.value.data = data;
    } else {
      current.next = new Node({
        key,
        data,
      });
    }
  }

  remove(key) {
    const index = this.hash(key);
    if (!this.table[index]) return false;
    let prev = this.table[index];
    let current = prev.next;
    while (current) {
      if (current.value.key === key) {
        prev.next = current.next;
        return true;
      }
      prev = current;
      current = current.next;
    }
    return false;
  }

  print() {
    const ret = Object.create(null);

    for (let i = 0, len = this.table.length; i < len; i += 1) {
      let head = this.table[i];
      while (head) {
        if (head.value !== 'head') {
          ret[head.value.key] = head.value.data;
        }
        head = head.next;
      }
    }

    console.log(ret);
  }
}

exports.HashMap = HashMap;
