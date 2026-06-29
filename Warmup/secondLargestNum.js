const arr = [10,22,8,99,0]

let largestNum = arr[0];

const dsa = (arr) => {

    let secondLargest = -Infinity;

    for(i=0; i<arr.length; i++){
        if(arr[i]>largestNum){
            secondLargest = largestNum;
            largestNum = arr[i];
        }
    }

    console.log(`the second largest num : ${secondLargest} and largest : ${largestNum}`)
}

dsa(arr)