
let arr = [0,1,2,3,4];

function sum(arr, n) {

    if (n === 0) {
        return arr[n];
    }

    return arr[n] + sum(arr,n-1)
    
}

console.log(sum(arr, 4))