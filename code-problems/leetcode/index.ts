function twoSum(nums: number[], target: number): number[] {

  for (let i = 0; i < nums.length; i++) {
      let tempTotal = nums[i];

      for (let x = i + 1 ; x <= nums.length; x++) {
        if (tempTotal + nums[x] === target) {
          return [i, x];
        }
      }
    
  }
};

console.log(twoSum([1,2,3,4,5], 7))