function isPalindrome(x: number): boolean {
  return x.toString() === x.toString().split('').reverse().join('');
};

console.log(isPalindrome(23))
console.log(isPalindrome(232))