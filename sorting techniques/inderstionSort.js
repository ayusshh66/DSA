const arr = [1,2,3,7,3,0,8,9,5,3,1]

function dsa(arr){

    let n = arr.length;

   

    for(let i = 1 ; i< n ; i ++){
         let p = i - 1;
         let curr = i ;
        while(arr[p]>arr[curr] && p>=0){
            arr[p+1] = arr[p];
            p--;
        }
        arr[p+1] = arr[curr]
    }
    return arr;
}

const result = dsa(arr)

console.log(result)