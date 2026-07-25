
function(head){
    let fast = head;
    let slow = head;


    while(fast && fast.next){
        slow = slow.next;
        fast=fast.next;
    }

    let curr = slow.next;
    slow.next=null;
    let prev = null;

    while(curr){
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }

    let firstList = head;
    let secondList = prev;

    while(secondList){
        let temp1 = firstList.next;
        let temp2 = secondList.next;
        firstList.next = secondList;
        secondList.next = temp1;
        firstList=temp1;
        secondList= temp2;
    }

}