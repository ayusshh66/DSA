function sqrt(x){

    let left = 2
    let right = Math.floor(x/2)

    while(l<=r){
        let mid = left + (Math.floor((right-left)/2))

        if(mid*mid === x){
            return mid
        }else if(mid*mid > x){
            right = mid-1
        }else{
            left = mid+1
        }
    }
    return -1;
}