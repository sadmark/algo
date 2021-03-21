const MyPromise = require('./index');

const p = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.5) {
      resolve(100);
    } else {
      reject('error now');
    }
  }, 100);
});

p.then(
  (value) => {
    console.log('resolved', value);
    return 1;
  },
  (error) => {
    console.log('rejected', error);
  },
).then(
  () => {
    console.log('resolved 2');
  },
  () => {
    console.log('rejected 2');
  },
);

MyPromise.all([1, 2, 3]).then((val) => {
  console.log(val);
});
