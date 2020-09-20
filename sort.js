function sort(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('Input should be an array');
  }
  arr.forEach((elem) => {
    if (typeof elem !== 'number') {
      throw new Error('Every element of input array should be a number');
    }
  });
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let x = arr[i];
        arr[i] = arr[j];
        arr[j] = x;
      }
    }
  }
  return arr;
}

module.exports = sort;
