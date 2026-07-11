// /**
//  * @param {character[]} s
//  * @return {void} Do not return anything, modify s in-place instead.
//  */
// var reverseString = function(s) {
//     for(i=0; i < Math.floor(s.length/2) ; i++){
//     let temp = s[i];
//     s[i] = s[s.length - 1 - i];
//     s[s.length - 1 - i] = temp;}
// };

const arr = ["H","e","l","l","o"]

function dsa(s) {
    let i = 0;             
    let p1 = s.length - 1; 

    while (i < p1) {       
        let temp = s[i];
        s[i] = s[p1];
        s[p1] = temp;
        p1--;
        i++;               
    }

    return s;
}

console.log(dsa(arr))