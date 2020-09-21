const { TestResult } = require("@jest/types");
//Pass parameter as number- 12345- Throw error
//Empty parameter- It should return the empty string
//Enter whitespace between string- REVE RSE- ESR EVER
//Add special characters- REVE$RSE- ESR$EVER
//Pass string as a parameter- REVERSE- ESREVER
//Pass array as parameter- throw error

const reverse = require("./reverse");
// test("Pass parameter as number", () => {

// });

test("Pass string as a parameter", () => {
  expect(reverse("REVERSE")).toBe("ESREVER");
});

test("Add special characters", () => {
  expect(reverse("REVE$RSE")).toBe("ESR$EVER");
});

test("Enter whitespace between string", () => {
  expect(reverse("REVE RSE")).toBe("ESR EVER");
});

test("Pass parameter as number", () => {
  expect(function () {
    reverse(12345);
  }).toThrow();
});

test("Empty parameter", () => {
  expect(reverse()).toBe();
});

test("Pass array as parameter", () => {
  expect(function () {
    reverse([10, 10, 30]);
  }).toThrow();
});
