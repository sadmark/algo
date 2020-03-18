const { LinkedListStack } = require('./LinkedListStack');

console.log('----- LinkedListStack test start ----');
const stack = new LinkedListStack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.print();
console.log('stack pop: ', stack.pop());
console.log('stack pop: ', stack.pop());
stack.push(1);
stack.push(2);
stack.print();

stack.clear();
stack.print();

console.log('----- LinkedListStack test end ----');