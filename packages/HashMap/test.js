const { HashMap } = require('./index');

const map = new HashMap();

map.put('a', 'aa');
map.put('b', 'bbb');
map.put('a', 'aacvsfaa');
map.put('c', '12');

map.remove('a');

console.log(map.get('c'));
console.log(map.get('ddd'));

map.print();