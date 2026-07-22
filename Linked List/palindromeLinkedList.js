

function palindrome(head){
    let slow = head;
    let fast = head;

    while(fast&& fast.next){
        slow = slow.next;
        fast= fast.next.next
    }

    let prev = null;
    let curr = slow;

    while(curr){
        temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr= temp;
    }

    let firstList = head;
    let secondList = prev;

    while(secondList){
        if(secondList !== firstList){
            return false 
        }
        firstList = firstList.next;
        secondList= secondList.next;

    }
    return true
}