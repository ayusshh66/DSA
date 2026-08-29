function reverse2(s){

    s = s.toLowerCase();

    let filteredString = "";
    let revString = "";

    for(let i = 0; i < s.length ; i++){
        if(s[i].match(/[a-z0-9]i/)){
            filteredString += s[i];
            revString = s[i] + revString
        }
    }

    return filteredString===revString;

}

//better appraoch

function reverseString2(s){
    s = s.toLowerCase();

    let i = 0 ;
    let j = s.length-1;

    while(j>i){
        if(s[i].match(/[a-z0-9]/i)){
            ++i;
        }else if(s[j].match(/[a-z0-9]/i)){
            --j;
        }else if(s[i] === s[j]){
            ++i;
            --j;
        }else{
            return false;
        }
    }

    return true
}