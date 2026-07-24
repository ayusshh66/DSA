
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function remove(head,val){
    let sentinel = new ListNode();
    let prev = sentinel
    sentinel.next = head;

    while(prev && prev.next){
        if(prev.next.val === val){
            prev.next = prev.next.next;
        }else{
            prev=prev.next
        }
    }

    return sentinel.next;
}