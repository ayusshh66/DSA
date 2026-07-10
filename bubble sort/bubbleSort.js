// bubbleSort.js

const arr = [1, 3, 5, 7, 3, 2, 0]


function dsa(nums) {

    let isSwapping = true

    let n = nums.length;

    for (let i= 0; i < n - 1; i++){
        for (let j = 0; j < n - 1 - i; j++){
            if (nums[j] > nums[j+1]) {
                let temp = nums[j]
                nums[j] = nums[j + 1];
                nums[j + 1] = temp;

                isSwapping = true;
            }
            if(!isSwapping) break;
        }
    }

    return nums;
    
}


const result = dsa(arr)

console.log(result)