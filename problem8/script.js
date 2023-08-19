class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}
 function reverseLinkedList(head ,k){
    if (!head || !head.next || k===0){
        return head;
    }
    let current =head;
    let prev =null;
    let next = null;
    let count =0;
    while(current && count <k){
        next=current.next;
        current.next=prev;
        prev=current;
        current=next;
        count++;
    }
    if (next){
        head.next=reverseLinkedList(next,k);
    }
    return prev;
 }