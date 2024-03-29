const calculator = require("./calculator");

test("CALCULATOR TEST 1", () => {
  expect(calculator.add(12, 4)).toBe(16);
});

test("CALCULATOR TEST 2", () => {
  expect(calculator.subtract(15, 41)).toBe(-26);
});

test("CALCULATOR TEST 3", () => {
  expect(calculator.divide(2, 4)).toBe(0.5);
});

test("CALCULATOR TEST 4", () => {
  expect(calculator.multiply(11, 11)).toBe(121);
});