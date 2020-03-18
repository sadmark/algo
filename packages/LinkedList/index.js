class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = new Node('head');
  }

  /**
   * @description 添加一个节点
   * @param {*} value
   */
  append(value) {
    let last = this.head;
    while (last.next) {
      last = last.next;
    }
    last.next = new Node(value);
  }

  /**
   * @description 指定的节点之后插入新节点
   * @param {*} prevValue
   * @param {*} value
   */
  insert(prevValue, value) {
    const prevNode = this.findByValue(prevValue);
    if (!prevNode) {
      // throw new Error('找不到节点，无法插入');
      return false;
    }
    const node = new Node(value);
    node.next = prevNode.next;
    prevNode.next = node;
    return true;
  }

  /**
   * @description 根据value删除节点
   * @param {*} value
   */
  remove(value) {
    let prev = this.head;
    let current = this.head.next;

    while (current && current.value !== value) {
      prev = current;
      current = current.next;
    }

    if (current.next) {
      prev.next = current.next;
    } else {
      prev.next = null;
    }
  }

  /**
   * @description 反转链表
   */
  reverse() {
    let prev = null;
    let current = this.head.next;

    while (current) {
      const next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    this.head.next = prev;
  }

  /**
   * @description 根据value找到节点
   * @param {*} value
   * @returns
   */
  findByValue(value) {
    let current = this.head.next;

    while (current && current.value !== value) {
      current = current.next;
    }

    return current;
  }

  /**
   * @description 根据索引找到节点
   * @param {*} index
   * @returns
   */
  findByIndex(index) {
    let current = this.head.next;

    while (index && current) {
      current = current.next;
      index--;
    }

    return current;
  }

  print() {
    let current = this.head.next;

    while (current) {
      console.log(current.value);
      current = current.next;
    }

    console.log('done');
  }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
