

function dsa(head){

    let odd = head;
    let even = head.next;

    let originalEven = even;

    while(odd.next && even.next){
        odd.next = odd.next.next;
        even.next = even.next.next;
        odd = odd.next;
        even = even.next;
    }

    odd.next = originalEven;

    return head;

}