

function random(head){

    let copyNode = new Map(); // map has ability to store (key,val) pairs
    let curr = head;

    while(curr){

        copyNode.set(curr, new Node(curr.val));
        curr = curr.next;

    }

    let curr = head;

    while(curr){
        let copy = copyNode.get(curr);
        copy.next = copyNode.get(curr.next);
        copy.random = copyNode.get(curr.random);

        curr = curr.next;
    }

    return copyNode.get(head);


}