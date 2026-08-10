let array = [1,3,2,5,4]

function permutation(arr){
    const sorted = [...arr].sort((a,b) => a-b);
    const length = arr.length;

    for(let i = 1 ; i < length ; i++){
        if(arr[i]>arr[i-1] && arr[i]>arr[i+1]){
            let temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;
        }
    }

    const isSorted = arr.every((val,i) => val === sorted[i])

    return isSorted? "YES": "NO"
}

console.log(permutation(array))