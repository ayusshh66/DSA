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