

function cycle(head){

    // const hashMap = new Set();

    // while(head){
    //     if(hashMap.has(head)){
    //         return true;
    //     }else{
    //         hashMap.add(head)
    //         head = head.next;
    //     }
    // }

    // return false;

    let slow = head;
    let fast = head;

    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next;

        if(fast===slow){
            return true;
        }
    }

    return false;
}