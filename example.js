// class Example {
//   //swap without using a third variable
//   sort() {
//     let x = 10,
//       y = 20;
//     console.log(
//       "Value of x before swapping" +
//         " " +
//         x +
//         "and value of y before swapping is" +
//         " " +
//         y
//     );
//     x = x + y;
//     y = x - y;
//     x = x - y;

//     console.log(
//       "Value of x before swapping" +
//         " " +
//         x +
//         "and value of y before swapping is" +
//         " " +
//         y
//     );
//   }
// }
// const ex = new Example();
// // ex.sort();

//reverse a number

class Rn {
  reverseNum(number) {
    let reverse = 0;
    while (number != 0) {
      let lastDigit = number % 10;
      reverse = reverse * 10 + lastDigit;
      number = number / 10;
    }
    return reverse;
  }
}
const final = new Rn();
console.log(final.reverseNum(1234));
