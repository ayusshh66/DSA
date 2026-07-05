/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {

    let x = 0;

    for(i=0 ; i < nums.length ; i++){
        if(nums[i] !== 0){
            temp = nums[x];
            nums[x] = nums[i];
            nums[i] = temp;
            x++
        }
    }
};