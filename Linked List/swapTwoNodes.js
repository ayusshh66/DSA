

function swapNode(head){

    const dummy = new ListNode();
    dummy.next = head;

    const prev = dummy;
    const curr = head;
    const nxt = head.next;

    while(curr && next){

        prev.next = nxt;
        curr.next = nxt.next;
        nxt.next = curr;

        prev = curr;
        curr = prev.next;
        nxt = curr && curr.next;

    }
    
    return dummy.next;

}