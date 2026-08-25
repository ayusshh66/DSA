

function stone(jewel, stone){

    let count = 0 ;

    for(let i= 0 ; i < stone.length ; i ++){
        for(let j = 0; j< jewel.length ; j++){
            if(stone[i] === jewel[j]){
                count++
            }
        }
    }

    return count;

}