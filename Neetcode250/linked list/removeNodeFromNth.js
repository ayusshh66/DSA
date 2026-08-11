/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        // let length  = 0 ;
        // let curr = head;

        // while(curr){
        //     length++;
        //     curr = curr.next;
        // }

        // if (n === length) {
        //     return head.next;
        // }

        // let loop = (length-n) - 1;
        // curr = head

        // for(let i = 0 ; i < loop ; i++){
        //     curr = curr.next
        // }

        // // let del = k.next;
        // curr.next = curr.next.next;
        // // del.next - null

        // return head;

        let slow = head;
        let fast = head;

        for(let i = 0 ; i < n ; i++){
            fast = fast.next;
        }

        if (!fast) {
            return head.next;
        }

        while( fast.next){
            fast = fast.next
            slow = slow.next;
        }


        slow.next = slow.next.next;

        return head;


    }
}
