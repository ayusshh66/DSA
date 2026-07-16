

function cycle(head){

    let hashMap = new Set();
    let curr = head;

    while(curr !== null){
        if(hashMap.has(curr)){
            return true;
        }else{
            hashMap.add(curr);
            curr = curr.next;
        }
    }
    return false;

}