module.exports = function sumOfOther(arr) {
  const res = [];
  for (let i = 0; i < arr.length; i += 1) {
    let sum = 0;
    for (let j = 0; j < arr.length; j += 1) {
      if (i !== j) {
        sum += arr[j];
      }
    }
    res.push(sum);
  }
  return res;
};
