const left = [9,5,4,1,10]
const right = [0,7,4,6,1]

function dsa(left,right){

    let res = [];
    let i = 0;
    let j = 0;

    while(i <  left.length && j < right.length){
        if(left[i]<right[j]){
            res.push(left[i])
            i++
        }else{
            res.push(right[j])
            j++
        }
    }

    return [...res,...left.slice(i),...right.slice(j)]


}

const result = dsa(left,right)

console.log(result);
