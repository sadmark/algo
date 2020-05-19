class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    if (this.root === null) {
      this.root = new Node(value);
      return;
    }

    const node = new Node(value);
    let target = this.root;
    let prev = null;
    let conflict = false; // 有没有重复的值插入

    while (target !== null) {
      if (target.value === value) {
        conflict = true;
        break;
      }
      prev = target;
      target = value < target.value ? target.left : target.right;
    }

    // 重复的值就直接插入到同值节点的右子节点中
    if (conflict) {
      while (target.right && target.right.value === value)  {
        target = target.right;
      }
      node.left = target.left;
      node.right = target.right;
      target.right = node;
      return;
    }

    if (value < prev.value) {
      prev.left = node;
    } else {
      prev.right = node;
    }
  }

  remove(value) {
    // 先找到父节点和目标节点
    let target = this.root;
    let prev = null;

    while (target !== null && target.value !== value) {
      prev = target;
      target = value < target.value ? target.left : target.right;
    }

    // 没有找到节点
    if (target === null) return;

    // 目标节点有两个子节点
    // 找到右子树的最小节点
    if (target.left !== null && target.right !== null) {
      let parent = target;
      let child = target.right;
      while (child.left !== null) {
        parent = child;
        child = child.left;
      }
      target.value = child.value;
      prev = parent;
      target = child;
    }
    const _child = target.left || target.right;

    // 要删除的是根节点
    if (prev === null) this.root = _child;
    // 删除对应节点
    if (value < prev.value) {
      prev.left = _child;
    } else {
      prev.right = _child;
    }
  }

  find(value) {
    // 可能有多个节点值相同的情况
    // 全部找出来放在数组里返回
    const arr = [];
    let target = this.root;
    let flag = false;

    while (target !== null) {
      if (target.value === value) {
        arr.push(target);
        flag = true;
      }

      if (flag && target.right && target.right.value !== value) {
        break;
      }

      target = value < target.value ? target.left : target.right;
    }

    return arr;
  }

  // 中序遍历
  print(node = this.root) {
    if (node === null) {
      return;
    }
    this.print(node.left);
    console.log(node.value);
    this.print(node.right);
  }
}

exports.BST = BST;