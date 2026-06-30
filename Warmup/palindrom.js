let rev = 0;

const dsa = (n) => {
    if(n<0) return console.log(false)
    const originalNumber = n; 
    while(n>0){    
       let rem = n % 10;
        rev = (10*rev) + rem;
        n =Math.floor(n/10);
    }
    console.log("the reverse is : ",rev)

    if(rev === originalNumber){
        return console.log(true);
    }
    else{
        return console.log(false);
    }
}

dsa(121)    

