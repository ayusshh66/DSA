const arr = [10]
// if(arr<2){
//     return null
// }

let largestNum = arr[0];

const dsa = (arr) => {

    let secondLargest = -Infinity;

    for(i=0; i<arr.length; i++){
        if(arr[i]>largestNum){
            secondLargest = largestNum;
            largestNum = arr[i];
        }else if(arr[i]> secondLargest){
            secondLargest = arr[i]
        }
    }
    if(arr.length >2){
        console.log(secondLargest)
    }

    return console.log("null")
    
}
dsa(arr)
