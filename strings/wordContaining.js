
function word(word,x){
    let res = []

    for(let i = 0 ; i < word.length ; i ++){
        for(let j = 0; j < word[i].length ; j ++){
            if(word[i][j] === x){
                res.push(i);
                break;
            }
        }
    }

    return res; 
}