//throw an error if function parameter is not an array otherwise it should return a sorted array
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

console.log(sort([20, 10, 30, 5]));
