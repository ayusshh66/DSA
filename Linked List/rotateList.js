

    function rotate(head, k){

        if(!head || !head.next) return head;

        let length = 0 ;
        let curr = head;

        while(curr){
            length++
            curr = curr.next;
        }

        k = k % length;

        if (k === 0) return head;

        let fast = head;
        let slow = head;

        for(let i = 0 ; i < k ; i++ ){

            fast = fast.next;

        }

        while(fast.next){
            slow= slow.next;
            fast = fast.next;
        }

        let newNode = slow.next;
        slow.next = null;
        fast.next = head;

        return newNode;

    }