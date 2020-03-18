const { LinkedListQueue } = require('./LinkedListQueue');

console.log('----- LinkedListQueue test start -----');
const queue = new LinkedListQueue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.print();

queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.print();

queue.enqueue(3);
queue.print();
console.log('----- LinkedListQueue test end -----');
