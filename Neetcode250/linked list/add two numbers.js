

function add(l1,l2){

    let dummy = new ListNode();
    let save = dummy;

    let carry = 0 ; 

    while(l1 || l2 || carry){

        let sum = (l1? l1.val : 0) + (l2? l2.val : 0) + carry;
        carry = Math.floor(sum / 10);
        let digit = sum%10;

        let newNode = new ListNode(digit);
        dummy.next = newNode;
        dummy= dummy.next;

        l1 = l1&& l1.val 
        l2 = l2&& l2.val 
    }

    return save.next;
}