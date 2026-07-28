

function crazy(){

    let dummy = new ListNode();

    let carry = 0 ;
    let sum = 0 ;

    let ansHead = dummy;

    while(l1 || l2 || carry){

        sum = (l1? l1.val : 0) + (l2? l2.val : 0) + carry;

        carry = Math.floor(sum / 10);

        let digit = sum % 10;

        let newNode = new ListNode(digit);

        dummy.next = newNode;

        dummy = dummy.next;

        l1= l1 && l1.next
        l2 = l2 && l2.next

    }

    return ansHead.next;

}