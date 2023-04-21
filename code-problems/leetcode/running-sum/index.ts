function runningSum(nums: number[]): number[] {
  let sum: number = 0;
  return nums.map(i => sum += i);
};

console.log(runningSum([1,2,3,4,5]))