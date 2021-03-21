const PENDING = 'PENDING';
const FULFILLED = 'FULFILLED';
const REJECTED = 'REJECTED';

class MyPromise {
  constructor(executor) {
    if (typeof executor !== 'function') {
      throw new TypeError('executor should be a function');
    }

    this.status = PENDING;
    this.value = null;
    this.reason = null;
    this.resolvedList = [];
    this.rejectedList = [];

    try {
      executor(this._onFulfilled.bind(this), this._onRejected.bind(this));
    } catch (error) {
      this._onRejected(error);
    }
  }

  _onFulfilled(value) {
    if (this.status === PENDING) {
      this.status = FULFILLED;
      this.value = value;
      setTimeout(() => {
        this.resolvedList.forEach((cb) => cb(value));
      }, 0);
    }
  }

  _onRejected(reason) {
    if (this.status === PENDING) {
      this.status = REJECTED;
      this.reason = reason;
      setTimeout(() => {
        this.rejectedList.forEach((cb) => cb(reason));
      }, 0);
    }
  }

  then(onResolved, onRejected) {
    const _this = this;

    let promise2;

    const _onResolved = typeof onResolved === 'function' ? onResolved : (v) => v;
    const _onRejected =
      typeof onRejected === 'function'
        ? onRejected
        : (error) => {
            throw error;
          };

    promise2 = new MyPromise(function (resolve, reject) {
      if (_this.status === FULFILLED) {
        setTimeout(() => {
          try {
            const x = _onResolved(_this.value);
            helper(promise2, x, resolve, reject);
          } catch (error) {
            reject(error);
          }
        }, 0);
      } else if (_this.status === REJECTED) {
        setTimeout(() => {
          try {
            const x = _onRejected(_this.reason);
            helper(promise2, x, resolve, reject);
          } catch (error) {
            reject(error);
          }
        }, 0);
      } else {
        _this.resolvedList.push(function () {
          try {
            const x = _onResolved(_this.value);
            helper(promise2, x, resolve, reject);
          } catch (error) {
            reject(error);
          }
        });
        _this.rejectedList.push(function () {
          try {
            const x = _onRejected(_this.reason);
            helper(promise2, x, resolve, reject);
          } catch (error) {
            reject(error);
          }
        });
      }
    });

    return promise2;
  }

  catch(onRejected) {
    const _onRejected =
      typeof onRejected === 'function'
        ? onRejected
        : (error) => {
            throw error;
          };

    this.then(null, _onRejected);
  }

  static resolve(val) {
    return new Promise(function (resolve) {
      resolve(val);
    });
  }

  static reject(reason) {
    return new Promise(function (_resolve, reject) {
      reject(reason);
    });
  }

  static all(promises) {
    if (!Array.isArray(promises)) {
      throw new TypeError(`${promises} should be an array`);
    }

    let promise2;
    const result = [];

    const _promises = promises.map((pms) => (pms instanceof MyPromise ? pms : MyPromise.resolve(pms)));

    promise2 = new Promise(function (resolve, reject) {
      _promises.forEach(function (pms, index) {
        pms
          .then(function (value) {
            result.push(value);

            if (index >= _promises.length - 1) {
              resolve(result);
            }
          })
          .catch(function (error) {
            reject(error);
          });
      });
    });

    return promise2;
  }
}

function helper(promise2, x, resolve, reject) {
  if (promise2 === x) {
    throw new Error(`${promise2} should not be equal to ${x}`);
  }

  if (x instanceof MyPromise) {
    x.then(resolve, reject);
  } else {
    resolve(x);
  }
}

module.exports = MyPromise;
