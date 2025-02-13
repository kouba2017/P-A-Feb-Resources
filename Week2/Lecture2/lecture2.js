class Node{
    constructor(val){
        this.data=val;
        this.next=null;
        this.prev=null;
    }
}
class DLL{
    constructor(){
        this.head=null;
        this.tail=null;
    }
    //Check if Emmpty in our Last SLL
    isEmpty(){
        return this.head==null?true:false;
    }
    push(val){
        // create an instance of our new Node 
        let newNode =new Node(val);
        // If our DLL is Empty
        if(this.isEmpty()){
            this.head=newNode;
            this.tail=newNode;
        }else{
            newNode.prev=this.tail;
            this.tail.next=newNode;
            this.tail=this.tail.next;
        }
    }
    forwardTraversal(){
        if(this.isEmpty()){
            console.log(null);
            
        }else{
            let pointer=this.head;
            //let pointer=this.tail
            while(pointer!=null){
                console.log(pointer.data);
                //pointer=pointer.prev
                pointer=pointer.next;
            }
        }
    }
    //removing while loop => use recursion
    forwardTraversalRecursive(){
        if(this.isEmpty()){
            return
            //break condition / base condition
        }else{
            console.log(this.head.data);
            this.head=this.head.next;
            this.forwardTraversalRecursive();
            //recursive call
        }
    }
}
dll1=new DLL();
dll1.push(12);
dll1.push(5);
console.log(dll1);
dll1.forwardTraversal();
dll1.forwardTraversalRecursive();

function doSomething(n){
    //base condition 
    if (n==0){
        console.log("Task Completed!");
        return
    }else{
        console.log("I am doing soemthing");
        doSomething(n-1);
    }
    // display some txt
    // Task Completed
    // I am doing soemthing
}
doSomething(4);


//factorial 4!=4*3*2*1
//          0!=1
function factorialRecursive(num){
    if(num==0){
        return 1
    }//guard on if
    let factorial=num*factorialRecursive(num-1);
    //20=19*18*17*16*...*1

    return factorial;
}
console.log(factorialRecursive(2));

// Factorial with memoization
const factorial=(function memoizationFactorial(){
    const cache={};
    return function (n){
        if(n in cache){
            return cache[n];
        }else{
            if(n==0 || n==1){
                cache[n]=1;
            }else{
                cache[n]=n*memoizationFactorial()(n-1);
            }
            return cache[n];
        }
    }
})();

console.log(factorial(7));
console.log(factorial(2));




