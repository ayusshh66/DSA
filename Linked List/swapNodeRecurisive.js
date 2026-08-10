

function swapNode(head){

    if(!head || !head.next){
        return head;
    }

    let left = head;
    let right = head.next;

    left.next = swapNode(right.next);
    right.next = left;

    return right;

}