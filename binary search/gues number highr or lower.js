function guess(x){
    let l = 1
    let r = Math.floor(x)

    while(l<=r){
        let mid = left + (Math.floor((right - left)/2))
        res = guess(mid)
        if(res === 0){
            return mid
        }

        if(res>0){
            right = mid-1
        }else{
            left = mid+1
        }
    }
}