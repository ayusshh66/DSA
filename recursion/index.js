const array = [1, 2, 3, 4, 5, 6, 7]


function dsa(arr) {
    let p1 = 0;
    let p2 = 3;
    let temp = 0;

    for ( let i = 0; i < arr.length; i++){

        if(arr.length % 2 === 0){
            temp = arr[i];
             arr[p1] = arr[p2];
             arr[p2] = temp;
             p1++
             p2++
        }

        if(arr.length % 2 === 1){

             

        }
    }

    return arr;
}

console.log(dsa(array))