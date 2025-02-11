// Difference between a class & object

// class => blue print that represents the structure

// object is an instance of the class

// class theName {
    // constructor(params){
    //     this.param=sth;
    // }
    // diff methods
//}

//Pointer => C++ & C => gives us the @ of objects in our memory

//**********SLL****** */

//Node [ val, next]

class Node{
    constructor(val){
        this.val=val;
        this.next=null;
    }
}
class SLL{
    constructor(head=null){
        this.head=head;
    }
    isEmpty(){
        return this.head==null? true : false;
    }
    // push /pop / display
    push(val){
        let newNode=new Node(val);
        // sll is empty
        if (this.isEmpty()){
            this.head=newNode;
            return
        }else{
            //
            let pointer=this.head;
            while(pointer.next!=null){
                pointer=pointer.next;
            }
            pointer.next=newNode;
            return
        }
    }
    pop(){
        if(this.isEmpty()){
            return null;
        }else if(! this.head.next){
            let temp=this.head.val;
            this.head=null;
            return temp;
        }else{
            let pointer=this.head;
            while(pointer.next.next!=null){
                pointer=pointer.next;
            }
            let temp =pointer.next.val;
            pointer.next=null;
            return temp;
        }
    }
    log(){
        if(this.isEmpty()){
            console.log(null);
            return
        }else{
            console.log("This is our SLL");
            let pointer=this.head;
            while(pointer!=null){
                console.log(pointer.val);
                
                pointer=pointer.next;
            }
            return
        }
    }
    //shift: remove from front  / unshift : adding to the front
    unshift(val){
        let newNode= new Node(val);
        if(this.isEmpty()){
            this.head=newNode;
            return
        }else{
            newNode.next=this.head;
            this.head=newNode;
            return
        }
    }
    shift(){
        if(this.isEmpty()){
            return null;
        }else{
            let temp=this.head;
            this.head=this.head.next;
            return
        }
    }

}
node1=new Node(10);
sll1=new SLL(node1);
sll1.push(45);
sll1.push(55);
sll1.log();
console.log(sll1);

sll1.pop();
console.log(sll1);
sll1.unshift(7);
sll1.log();
sll1.shift();
sll1.log();