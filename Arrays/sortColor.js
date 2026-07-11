/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let n = nums.length
    let isSwapping = true;
       

        for(let i = 0 ; i < n - 1 ; i ++){
            for(let j =0; j < (n-1)-i ; j++){
                if(nums[j+1]<nums[j]){
                    let temp = nums[j];
                    nums[j] = nums[j+1];
                    nums[j+1] = temp;
                    isSwapping = true;
                } 
                if(!isSwapping) break;    
            }
        }
        return nums;
};