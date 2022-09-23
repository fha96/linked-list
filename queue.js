'use strict';
const LinkedList = require("./linkedList");

 


class Queue {

    constructor() {
        this.storage = new LinkedList();
    }


    enqueue(value) {
        this.storage.append(value);
    }

    dequeue() {
        if(this.storage.head){
            let dequeued = this.storage.getAndDeleteFirst();
            return dequeued;
        } else {
            throw new Error('Your queue is empty');
        }
    }

    peek() {
        if(this.storage.head){
            let peeked = this.storage.getFirst();
            return peeked;
        } else {
            throw new Error('Your queue is empty');
        }
    }

    isEmpty() {
        if(this.storage.head){
            return false;
        } else {
            return true;
        }
    }


}

module.exports = Queue;