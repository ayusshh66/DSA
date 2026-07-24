/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function removeNthNode(head,n){

    let sentinel = new ListNode();
    sentinel.next = head;

    let length = 0  ;
    
    while(head){
        head = head.next;
        length++
    }

    let deletePos = (length - n ) + 1;

    let prevPos = deletePos - 1;

    let prev = sentinel;

    for(let i = 0 ; i < prevPos ; i ++){
        prev = prev.next;
    }

    prev.next = prev.next.next;

    return sentinel.next

}