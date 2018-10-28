function summator(a, b) {
  return a + b;
}

function make(...fns) {

  let arr = fns;

  function func(...x) {
    if (typeof x[0] === 'function') {
      const res = arr.reduce(x[0])
      return res;
    } else {
      x.forEach(item => arr.push(item));
      return func;
    }
  };

  return func;
}

