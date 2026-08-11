

function cycle(head){

    const hashMap = new Set();

    while(head){
        if(hashMap.has(head)){
            return true;
        }else{
            hashMap.add(head)
            head = head.next;
        }
    }

    return false;

}