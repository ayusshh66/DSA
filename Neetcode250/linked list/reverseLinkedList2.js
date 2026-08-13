

function reverse2(head,right,left){

    let dummy = new ListNode();
    dummy.next = head;
    let curr = head;
    let prevList = dummy;

    for(let i =0 ; i< left-1 ; i++){
        curr = curr.next;
        prevList = prevList.next;
    }

    let prev = null;

    for(let i = 0 ; i < (right-left)+1 ; i++){
        let temp = curr.next;
        curr.next = prev;

        prev = curr;
        curr=temp;
    }

    prevList.next.next = curr;
    prevList.next = prev;

    return dummy.next;

}