// 大顶堆
class Heap {
  constructor() {
    // 下标0为空位
    this._arr = [null];
    this._currentIndex = 0;
  }

  print() {
    console.log(this._arr.slice(1));
  }

  insert(val) {
    // 先插入到数组最后
    this._currentIndex += 1;
    this._arr[this._currentIndex] = val;

    // 然后调整位置
    let i = this._currentIndex;
    while (true) {
      const half = parseInt(i / 2);
      if (half > 0 && this._arr[i] > this._arr[half]) {
        this.swap(i, half);
        i = half;
      } else {
        break;
      }
    }
  }

  swap(i, j) {
    const _temp = this._arr[i];
    this._arr[i] = this._arr[j];
    this._arr[j] = _temp;
  }

  removeTop() {
    // 为了防止出现数据空洞
    // 把末尾元素交换到堆顶
    // 然后进行堆化调整
    this._arr[1] = this._arr[this._currentIndex];
    this._arr.pop();
    this._currentIndex -= 1;

    this.heapify(1);
  }

  heapify(index) {
    while (true) {
      let i = index;
      if (i * 2 <= this._currentIndex && this._arr[i] < this._arr[i * 2]) {
        i *= 2;
      }
      if (i * 2 + 1 <= this._currentIndex && this._arr[i] < this._arr[i * 2 + 1]) {
        i = i * 2 + 1;
      }
      if (i === index) break; // 堆化完毕
      this.swap(index, i);
      index = i; // 关键一步
    }
  }
}

exports.Heap = Heap;
