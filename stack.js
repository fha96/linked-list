'use strict';

const LinkedList = require("./linkedList");


class Stack {
    constructor(){
        this.storage = new LinkedList();
        this.top = null;
    }


    push(value){
        this.storage.append(value);
        this.top = value;
    }

    pop() {
        if(this.top) {
            let poppedValue = this.storage.getLast();
            this.storage.deleteLast();
            this.top = this.storage.getLast();
            console.log('Popped Value>>>>>>>>>>>>>>>>>', poppedValue);
            return poppedValue;
        } else {
            console.log('Your Stack is Empty');
        }
    }

    peek() {
        if(this.top) {
            return this.top;
        } else {
            throw new Error('Your Stack is Empty');
        }
        
    }

    isEmpty() {
        if(this.top){
            return false;
        } else {
            return true;
        }
    }



}

module.exports = Stack;