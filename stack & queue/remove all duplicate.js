function dup(s){

    let stack = []

    for(let i =0; i< s.length ; i++){
        let top = stack[stack.length-1]

        if(s[i] == top){
            stack.pop()
        }else{
            stack.push()
        }
    }
    return stack.join("")
}