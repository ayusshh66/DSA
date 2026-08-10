function paint(arr){

    const hash = {}

    for(let i = 0 ; i<arr.length ; i ++){

        if(hash[arr[i]]){
            hash[arr[i]]++;
        }else{
            hash[arr[i]] = 1;
        }

    }

    const key = Object.keys(hash);

    if(key.length > 2){
        return "No";
    }

    if(key.length === 1){
        return "Yes"
    }

    if(key.length === 2){
        const num1 = hash[key[0]];
        const num2 = hash[key[1]];

        if(Math.abs(num1-num2) > 1){
            return "No";
        }else{
            return "Yes"
        }
    }

}

console.log(paint([1,2,1,1,2]))