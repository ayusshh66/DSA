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
     * @return {void}
     */
    reorderList(head) {
        // let dummy = new ListNode();
        // let save = dummy;
        let prev = null;

        let slow = head;
        let fast = head;

        // let length = 0;

        // while(head){
        //     length++;
        //     head = head.next;
        // }

        while(fast && fast.next){
            slow = slow.next;
            fast = fast.next.next;
        }

        let curr = slow.next;
        slow.next = null;

        while(curr){
            let temp = curr.next;
            curr.next = prev;

            prev = curr;
            curr = temp
        }

        let firstList = head;
        let secondList = prev;

        while(secondList){
            let temp1 = firstList.next;
            let temp2 = secondList.next;
            firstList.next = secondList;
            secondList.next = temp1;
            secondList = temp2;
            firstList = temp1 
        }

        return head;



    }
}
