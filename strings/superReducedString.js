

function findWordCount(s){
    let arr = [];

    for(let char of s){
        if(arr.length > 0 && arr[arr.length - 1] === char){
            arr.pop();
        }else{
            arr.push(char)
        }
    }

    let string = arr.join("");

    return string.length>0? string : "Empty String"
}

const result = findWordCount("aaabcccdd");

console.log(result)