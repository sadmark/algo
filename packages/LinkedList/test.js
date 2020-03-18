const { LinkedList } = require('./index');

console.log('---- LinkedList test start ----');
const ll = new LinkedList();
ll.append(1);
ll.append(2);
ll.append(3);
ll.append(4);
ll.append(5);
ll.print();

console.log('----- insert test -----');
ll.insert(3, 6);
ll.insert(3, 6);
ll.insert(6, 0);
ll.insert(5, 9);
ll.insert(100, 3);
ll.print();

console.log('----- remove test -----');
ll.remove(3);
ll.remove(6);
ll.print();

console.log('----- find index test -----');
console.log('find by index 3: ', JSON.stringify(ll.findByIndex(3)));
console.log('find by index 6: ', JSON.stringify(ll.findByIndex(6)));
console.log('find by index 20: ', JSON.stringify(ll.findByIndex(20)));

console.log('----- find value test -----');
console.log('find by value 3: ', JSON.stringify(ll.findByValue(3)));
console.log('find by value 0: ', JSON.stringify(ll.findByValue(0)));
console.log('find by value 20: ', JSON.stringify(ll.findByValue(20)));

console.log('----- reverse test -----');
ll.reverse();
ll.print();
console.log('---- LinkedList test end ----');
