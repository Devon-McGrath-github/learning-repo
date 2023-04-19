function twoSum(nums, target) {
    for (var i = 0; i < nums.length; i++) {
        var tempTotal = nums[i];
        for (var x = i + 1; x <= nums.length; x++) {
            if (tempTotal + nums[x] === target) {
                return [i, x];
            }
        }
    }
}
;
console.log(twoSum([1, 2, 3, 4, 5], 7));
