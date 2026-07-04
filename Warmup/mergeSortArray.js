/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let copyNums1 = nums1.slice(0,m);
    let n1 = 0;
    let n2 = 0;
    
    for(i=0; i < m + n ; i++){
        if(n2 >= n || (copyNums1[n1] < nums2[n2] && n1 < m)){
            nums1[i] = copyNums1[n1];
            n1++;
        }else{
            nums1[i]  = nums2[n2];
            n2++;
        }
    }
};