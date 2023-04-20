var addTwoNumbers = function(l1, l2) {
  l1 = parseInt(l1.reverse().join(''))
  l2 = parseInt(l2.reverse().join(''))

  let result = l1 + l2;
  return result.toString().split('').reverse();
};

console.log(addTwoNumbers([2,4,3], [5,6,4]))