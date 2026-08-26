

// function stone(jewel, stone){

//     let count = 0 ;

//     for(let i= 0 ; i < stone.length ; i ++){
//         for(let j = 0; j< jewel.length ; j++){
//             if(stone[i] === jewel[j]){
//                 count++
//             }
//         }
//     }

//     return count;

// }

// const result = stone("aA","aAAbbbb")

// console.log(result)

function stone(jewels, stones){

    let jset = new Set();
    let count = 0;

    for(let i = 0 ; i < jewels.length ; i++){
        jset.add(jewels[i])
         
    }
    for(let i = 0 ; i < stones.length ; i++){
        if(jset.has(stones[i])){
            count++
        }
    }

    return count;
}

let result = stone("aA", "aaAbA")

console.log(result)