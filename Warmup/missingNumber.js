/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let len = nums.length;
    let sum = len*(len+1)/2
    let sum2 = 0;

    for(i=0 ; i< nums.length ; i++){
        sum2 = sum2 + nums[i];
    }

    return sum - sum2
};