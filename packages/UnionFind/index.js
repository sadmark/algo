class UnionFind {
  constructor(size) {
    this.roots = new Array(size).fill(0).map((_, idx) => idx);
  }

  get count() {
    let count = 0;

    for (let i = 0, len = this.roots.length; i < len; i++) {
      if (this.roots[i] === i) count++;
    }

    return count;
  }

  find(ele) {
    if (this.roots[ele] === ele) return ele;
    return (this.roots[ele] = this.find(this.roots[ele]));
  }

  union(ele1, ele2) {
    const u1 = this.find(ele1);
    const u2 = this.find(ele2);
    if (u1 === u2) return;
    this.roots[u1] = u2;
  }
}

module.exports.UnionFind = UnionFind;
