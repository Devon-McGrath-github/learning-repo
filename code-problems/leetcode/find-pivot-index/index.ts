function pivotIndex(nums: number[]) {
  let sumLeft: number = 0;
  let sumRight: number = 0;

  let i: number = 0;
  while (i < nums.length) {
    sumLeft = nums.slice(0, i).reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    sumRight = nums.slice(i+1).reduce((accumulator, currentValue) => accumulator + currentValue, 0)  
    if (sumLeft === sumRight) return i;
    i++
  }

  return -1;
};

console.log(pivotIndex([2,1,-1]))
