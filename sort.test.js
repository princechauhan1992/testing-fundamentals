//Pass parameter to sort function other than array-- number 890
//Pass no parameter to the function-- throw an error
//Pass array of strings ['Kiwi', 'Orange', 'Guava']- throw error
//Pass array of numbers [20, 40, 5, 10, 100, 1]- [1, 5, 10, 20, 40, 100]
//Pass array of number [2, 1, 4, 3, 6, 5, 8, 7 , 10, 9]- [1, 2, 3, 4, 5, 6, 7, ,8, 9, 10]

const sort = require('./sort');

const a = [20, 40, 5, 10, 100, 1];
const b = [2, 1, 4, 3, 6, 5, 8, 7, 10, 9];

test('it should return a sorted array', () => {
  expect(sort(a)).toEqual([1, 5, 10, 20, 40, 100]);
});

test('it should return a sorted array', () => {
  expect(sort(b)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});

test('it should throw an error if a string is provided', () => {
  const string = 'prince';
  expect(() => sort(string)).toThrow();
});

test('it should throw an error if no parameter is provided', () => {
  expect(() => sort()).toThrow();
});

test('it should throw an error if elements are not numbers', () => {
  const testArr = ['Kiwi', 'Orange', 'Guava'];
  expect(() => sort(testArr)).toThrow();
});
// try {
//   sort('dsdsds');
//   console.log(false);
// } catch (error) {
//   console.log(true);
// }

// if (JSON.stringify(sort(a)) === JSON.stringify([1, 5, 10, 20, 40, 100])) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// if (JSON.stringify(sort(b)) === JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) {
//   console.log(true);
// } else {
//   console.log(false);
// }
