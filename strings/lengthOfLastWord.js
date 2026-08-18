function lastWord(s){

    let ne = s.length - 1;

    while(n>=0){
        if(s[n] !== " "){
            break;
        }else{
            --n
        }
    }

    let count = 0 ;

    while(n>=0){
        if(s[n] !== " "){
            count++;
            --n;
        }else{
            break;
        }
    }

    return count;
}