const { BST } = require('./bst');

const bst = new BST();
bst.insert(30);
bst.insert(22);
bst.insert(32);
bst.insert(32);
bst.insert(30);
bst.insert(3);
bst.insert(30);
bst.insert(145);
bst.insert(14);
bst.insert(11);
bst.insert(10);

console.log(bst);

bst.print();
bst.remove(32);

console.log(bst.find(3));
console.log(bst.find(11));
console.log(bst.find(30));

bst.print();