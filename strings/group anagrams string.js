function anagram(strs){
    let hashMap = {};

    for(let i=0; i < strs.length ; i++){
        let sortedStrs = strs[i].split("").sort().join("");
        if(!hashMap[sortedStrs]){
            hashMap[sortedStrs] = [s[i]];
        }else{
            hashMap[sortedStrs].push(s[i]);
        }
    }
    return [...Object.values(hashMap)]
}