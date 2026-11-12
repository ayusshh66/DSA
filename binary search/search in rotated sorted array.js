function rotated(nums,target){

    let l = 0;
    let r = nums.length -1 


    while(l<=){
        let m= l+(Math.floor(r-l)/2)

        if(nums[m] == target){
            return m
        }

        //left sorted
        if(nums[l]<= nums[m]){
            if(nums[m]> target && nums[l]<= target){
                r=m-1
            }else{
                l = m+1
            }
        }else{
    
            if(nums[m]< target && nums[r]>= target){
                l = m+1
            }else{
                r= m-1
            }
        }
    }

}