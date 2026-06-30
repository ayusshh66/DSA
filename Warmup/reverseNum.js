let rev = 0;

const dsa = (n) =>{

    let originalNumber = n;
    
    let x = Math.abs(n);

    while(x>0){
        let rem = x % 10;
        rev = (rev*10) + rem;
        x = Math.floor(x/10)
    }

    if(n<0){
        rev = "-" + rev;
    }
    let revNum = Number(rev)

    console.log("the original number was :", originalNumber);
    console.log("the reverse is :" , revNum)

}

dsa(-123)