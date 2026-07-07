// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var singleNumber = function(nums) {
    
//     let hashMap = {};

//     for ( i = 0 ; i < nums.length ; i ++ ){
//         if (! hashMap[nums[i]] ){
//             hashMap[nums[i]] = 1 ;
//         } else {
//             hashMap[nums[i]] ++ ;
//         }
//     }

//     for ( i = 0 ; i < nums.length ; i ++ ){
//         if ( hashMap[nums[i]] === 1 ){
//             return nums[i] ;
//         }
//     } 
// };

//MOST OPTIMAL SOLUTION
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    
    let xor = 0;

    for ( let i = 0 ; i < nums. length ; i ++ ){
        xor = xor ^ nums[i] ;
    }

    return xor ;
};