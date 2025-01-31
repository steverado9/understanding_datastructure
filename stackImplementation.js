//stack class
class Stack {

    //Array is used to implement stack
    constructor() {
        this.items = [];
    }

    //functions to be implemented
    //push(item)
    //push function
    push(element) {
        //push element into the items
        this.items.push(element)
    }

    //pop function
    pop() {
        //return top most element in the stack
        //and removes it from the stack
        //underflow if stack is empty
        if (this.items.length == 0)
            return "Underflow";
        return this.items.pop();
    }

    //peek function
    peek() {
        //return the top most element from the stack
        //but does'nt delete it
        return this.items[this.items.length - 1]
    }

    //isEmpty function
    isEmpty() {
        //return true if stack is empty
        return this.items.length == 0;
    }

    //printStack Function
    printStack() {
        let str = "";
        for (let i = 0; i < this.items.length; i++)
            str += this.items[i] + "";
        return str;
    }
}

//creating object for stack class
const stack = new Stack();

//testing isEmpty and pop on an empty stack

//return true
console.log(stack.isEmpty());

//returns underflow
console.log(stack.pop());
//Adding elements to the stack
stack.push(10);
stack.push(20);
stack.push(30);

//printing the stack elements
//prints [10, 20, 30]
console.log(stack.printStack());

//retrun 30
console.log(stack.peek());

//return 30 and remove it from stack
console.log(stack.pop());

//return [10, 20]
console.log(stack.printStack());





