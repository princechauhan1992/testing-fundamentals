function sort(arr) {
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
