/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
     let hashMap  = {};
        let condition = nums.length/3
        let arr = []

        for(let i = 0 ; i < nums.length ; i ++){
            if(!hashMap[nums[i]]){
                hashMap[nums[i]] = 1;
            }else{
                hashMap[nums[i]]++;
            }
        }

        for(let i = 0 ; i < nums.length ; i ++){
            if(hashMap[nums[i]]> condition){
                if(!arr.includes(nums[i]))
                arr.push(nums[i])
            }
        }

        return arr;
};