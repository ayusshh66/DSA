

function vowels(s){

    let hashMap = new Map();

    for(let i = 0 ; i < s.length ; i ++){
        if(!hashMap[s[i]]){
            hashMap[s[i]]=1;
        }else{
            hashMap[s[i]]++
        }
    }

    let vowels = ["a","e","o","i","u"];
    let maxVowels = 0;
    let maxConsonents = 0;

    for(let i = 0 ; i < s.length ; i++){
        if(vowels.includes(s[i])){
            if(hashMap[s[i]] > maxVowels){
                maxVowels = hashMap[s[i]]
            }
        }else{
            if(hashMap[s[i]] > maxConsonents){
                maxConsonents = hashMap[s[i]]
            }
        }
    }

    return maxConsonents+maxVowels;
}

// let result = vowels("aeijkljmmno");
// vowels("aeijkljmmno")2
console.log(vowels("aeiaeia"))