

function dsa(head){
    
    let slow = 0 ;
    let fast = 0;

    while(fast.next != null){
        slow= slow.next;
        fast = fast.next;

        while( fast != null ||fast.next !== null){
            slow =slow.next;
            fast = fast.next;
        }

        return slow;
    }

}