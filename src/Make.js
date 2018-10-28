function make(...fns) {
  const arr = fns;
  function func(...x) {
    let ret;
    if (typeof x[0] === 'function') {
      const res = arr.reduce(x[0]);
      ret = res;
    } else {
      x.forEach(item => arr.push(item));
      ret = func;
    }
    return ret;
  }
  return func;
}
