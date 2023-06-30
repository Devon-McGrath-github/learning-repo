/* Questions from: 

https://www.codingame.com/playgrounds/5422/js-interview-prep-recursion 

*/

function sumRange(n, total = 0) {
  if (n <= 0) return total;
  sumRange(n - 1, total + n);
}

function power(base, exponent) {
  if (exponent === 0) return 1;
  return base * power(base, exponent - 1);
}

function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}

