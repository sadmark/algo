class SkipList {
  static MAX_LEVEL = 16;

  constructor() {
    this.head = new Node();
    this.levelCount = 1;
  }

  getRandomLevel() {
    let level = 1;
    for (let i = 0; i < SkipList.MAX_LEVEL; i += 1) {
      if (Math.random() < 0.5) {
        level += 1;
      }
    }
    return level;
  }

  insert(value) {
    const level = this.getRandomLevel();
    const update = new Array(level);

    // 找到每一层需要更新的节点
    let poi = this.head;
    for (let i = level - 1; i >= 0; i -= 1) {
      while (poi.forwards[i] && poi.forwards[i].value < value) {
        poi = poi.forwards[i];
      }
      update[i] = poi;
    }

    const node = new Node(value, level);
    // 将新的节点插入并且调整原数据的forwards指向
    for (let i = 0; i < level; i += 1) {
      node.forwards[i] = update[i].forwards[i];
      update[i].forwards[i] = node;
    }

    if (this.levelCount < level) {
      this.levelCount = level;
    }
  }

  remove(value) {
    const update = new Array(this.levelCount);
    let poi = this.head;
    for (let i = this.levelCount - 1; i >= 0; i -= 1) {
      while (poi.forwards[i] && poi.forwards[i].value < value) {
        poi = poi.forwards[i];
      }

      update[i] = poi;
    }

    // 判断是否是需要删除的节点
    if (poi.forwards[0] && poi.forwards[0].value === value) {
      for (let i = this.levelCount - 1; i >= 0; i -= 1) {
        if (update[i].forwards[i] && update[i].forwards[i].value == value) {
          update[i].forwards[i] = update[i].forwards[i].forwards[i];
        }
      }
    }
  }

  find(value) {
    // 先找到前驱节点
    let poi = this.head;
    for (let i = this.levelCount - 1; i >= 0; i -= 1) {
      while (poi.forwards[i] && poi.forwards[i].value < value) {
        poi = poi.forwards[i];
      }
    }
    // 前驱节点的forwards的引用是否指向目标节点
    if (poi.forwards[0] && poi.forwards[0].value === value) {
      return poi.forwards[0];
    }
    return null;
  }

  print() {
    let poi = this.head;
    let index = 1;

    while (poi.forwards[0]) {
      console.log('Node %d: %d', index, poi.forwards[0].value);
      poi = poi.forwards[0];
      index += 1;
    }

    console.log('----- print finish -----');
  }
}

class Node {
  constructor(value = -1, maxLevel = 0, forwards = new Array(SkipList.MAX_LEVEL)) {
    this.value = value;
    this.maxLevel = maxLevel;
    this.forwards = forwards;
  }
}

console.log('----- SkipList test start -----');
const list = new SkipList();
list.insert(10);
list.insert(30);
list.insert(20);
list.insert(90);
list.print();

const n = list.find(20);
console.log('find node 20: ', n);

list.remove(20);
list.print();

list.insert(20);
list.insert(70);
list.print();
console.log('----- SkipList test end -----');
