// 大顶堆
class Heap {
  static sort(arr) {
    if (arr[0] !== null) {
      arr.unshift(null);
    }
    const currentIndex = arr.length - 1;
    const heap = new Heap();
    heap._arr = arr;
    heap._currentIndex = currentIndex;

    // 建堆完成
    for (let i = parseInt(currentIndex / 2, 10); i > 0; i -= 1) {
      heap.heapify(i);
    }

    // 开始排序
    // 由于是大顶堆
    // 所以不停的删除顶部元素插入到最后就行了
    let i = currentIndex;
    while (i > 1) {
      heap.swap(1, i);
      i -= 1;
      heap.heapify(1, i);
    }

    return arr.slice(1);
  }

  constructor() {
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

  heapify(i, n = this._currentIndex) {
    const arr = this._arr;
    while (true) {
      let index = i;
      if (i * 2 <= n && arr[i] < arr[i * 2]) {
        index = i * 2;
      }
      if (i * 2 + 1 <= n && arr[index] < arr[i * 2 + 1]) {
        index = i * 2 + 1;
      }
      if (i === index) {
        // 堆化完毕
        break;
      }
      // 交换元素
      this.swap(i, index);
      i = index;
    }
  }
}

exports.Heap = Heap;
