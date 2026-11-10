function star(s){
    let stack = []

    for(let i=0 ; i< s.length ;i++){
        if(s[i] == "*"){
            stack.pop()
        }else{
            stack.push()
        }
    }

    return stack.join("")
}