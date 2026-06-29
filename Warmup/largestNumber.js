const arr = [12,34,67,1,0,99]
let largestNum = -Infinity;

const dsa = (arr) => {
    for(i=0; i<arr.length; i++){
        if(arr[i]>largestNum){
            largestNum=arr[i]; 
        }
    }
}

dsa(arr);
console.log(largestNum)