

function Node(val){
    this.val = val;
    this.next = null;
}

function myLinkedList(val){
    this.head = null;
    this.size= 0; 
}

function addAtHead(val){
    let newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
    this.size++
}

function addAtTail(val){
   let newNode = new Node(val);

   if(this.head== null){
    this.head =newNode;
   }else{
    let curr = this.head;

    while(curr.next !== null){
        curr=curr.next;
    }
    curr.next = newNode;
   }
   this.size++
}
