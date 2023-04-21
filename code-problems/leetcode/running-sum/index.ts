function runningSum(nums: number[]): number[] {
  let runningSum: number[] = [];

  let sum: number = 0;

  for (let i = 0; i < nums.length; i++) {
      if (i === 0 ) {
        runningSum.push(nums[i])
      }
      else {
        sum = runningSum[i - 1] + nums[i]
        runningSum.push(sum)
      };
      
  }
  return runningSum
};

console.log(runningSum([1,2,3,4,5]))