class Trie {
  constructor() {
    this.root = Object.create(null);
  }

  insert(str) {
    let node = this.root;
    for (let char of str) {
      if (!node[char]) {
        node[char] = Object.create(null);
      }
      node = node[char];
    }
    // 计数
    if (!node.$$) {
      node.$$ = 0;
    }
    node.$$ += 1;
  }

  most() {
    let max = 0;
    let maxWord = '';
    const walk = (node, word) => {
      if (node.$$ && node.$$ > max) {
        max = node.$$;
        maxWord = word;
      }
      for (let char in node) {
        walk(node[char], word + char);
      }
    };

    walk(this.root, '');

    return {
      count: max,
      word: maxWord,
    };
  }
}

exports.Trie = Trie;
