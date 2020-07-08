const { Trie } = require('./index');

function getRandomStr(len) {
  let str = '';
  for (let i = 0; i < len; i += 1) {
    const char = String.fromCodePoint(parseInt(Math.random() * 26, 10) + 'a'.charCodeAt());
    str += char;
  }
  return str;
}

const trie = new Trie();

for (let i = 0; i < 1000000; i += 1) {
  const str = getRandomStr(5);
  trie.insert(str);
}

console.log(trie.most());
