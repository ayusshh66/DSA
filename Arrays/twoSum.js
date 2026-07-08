// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
// var twoSum = function(nums, target) {
//     for(let i =0 ; i<nums.length ; i++){
//             for(let j = i+1; j <= (nums.length)-1; j++ ){
//                 if(nums[i] + nums[j] === target){
//                     return [i,j]
//                 }
//             }
//         }
// };

// OPTIMAL APPROACH

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let hashMap = {};
    let n = nums.length;

    for(let i = 0 ; i < n ; i++){
        hashMap[nums[i]] = i;
    }

    for(i=0; i <n ; i++){
        let ans = target - nums[i];

        if(hashMap[ans] && hashMap[ans] !== i){
            return [i, hashMap[ans]]
        }
    }
};