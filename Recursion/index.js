/* Questions from: 

https://www.codingame.com/playgrounds/5422/js-interview-prep-recursion 

*/

// Question 1:
function sumRange(n, total = 0) {
  if (n <= 0) return total;
  sumRange(n - 1, total + n);
}

// Question 2:
function power(base, exponent) {
  if (exponent === 0) return 1;
  return base * power(base, exponent - 1);
}
// Question 3:
function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}

// Question 4:
function all(array, callback) {
  if (array.length <= 0) return true;
  return callback(array[0]) ? all(array.slice(1), callback) : false;
}

// testing it:
var allAreLessThanSeven = all([1, 2, 9], function (num) {
  return num < 7;
});

console.log(allAreLessThanSeven); // false
