const dsa = (n) => {
    let count = 0;
    if(n===0) return console.log(count=1) // corner case
    n = Math.abs(n)
    while(n >0 ){   
        n = Math.floor(n/10);
        count++;
    }
    console.log(count)
}
dsa(-90)

// Maht.abs() turns the value posotive if its negetive and if its postive it will remain same