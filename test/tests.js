const assert = require('assert');

Object.freeze(assert);
const sumOfOther = require('../src/SumOfOther');

describe('Solve sumOfOther', () => {
  it('1', () => {
    const res = sumOfOther([2, 3, 4, 1]);
    assert.deepEqual(res, [8, 7, 6, 9]);
  });

  it('2', () => {
    const res = sumOfOther([1, 5, 6]);
    assert.deepEqual(res, [11, 7, 6]);
  });

  it('3', () => {
    const res = sumOfOther([2, 3, 4, 1, 7]);
    assert.deepEqual(res, [15, 14, 13, 16, 10]);
  });

  it('4', () => {
    const res = sumOfOther([3, 4, 1]);
    assert.deepEqual(res, [5, 4, 7]);
  });
});

const make = require('../src/Make');

function sum(a, b) {
  return a + b;
}
function mult(a, b) {
  return a * b;
}

describe('Make', () => {
  it('1', () => {
    const res = make(15)(34, 21, 666)(41)(sum);
    assert.deepEqual(res, 777);
  });

  it('2', () => {
    const res = make(1)(2, 3, 4)(5)(6)(mult);
    assert.deepEqual(res, 720);
  });
});

const recursion = require('../src/Recursion');

let tree = {"value":100,"left":{"value":90,"left":{"value":70},"right":{"value":99}},"right":{"value":120,"left":{"value":110},"right":{"value":130}}};
let tree1 = {"value":54,"left":{"value":91,"left":{"value":70},"right":{"value":99}},"right":{"value":120}};

describe('Recursion', () => {
  it('1', () => {
    const res = recursion(tree);
    assert.deepEqual(res, [[100], [90, 120], [70, 99, 110, 130]]);
  });
  it('2', () => {
    const res = recursion(tree1);
    assert.deepEqual(res, [[54], [91, 120], [70, 99]]);
  });
});
