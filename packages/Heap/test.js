const { Heap } = require('./index');

const heap = new Heap;

heap.insert(100);
heap.insert(2);
heap.insert(1040);
heap.insert(23);
heap.insert(5);
heap.insert(-1);
heap.insert(123);
heap.insert(654);

heap.removeTop();

heap.print();
