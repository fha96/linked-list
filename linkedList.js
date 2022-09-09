'use strict';

const Node = require("./node");



class LinkedList {
    constructor() {
        this.head = null;
    }
    //add node to the first of linked list
    insert(value) {
        const node = new Node(value);
        if(!this.head){
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
    }
    //add nodes to the end of linked list
    append(value) {
        const node = new Node(value);
        if(!this.head) {
            this.head = node;
        } else {
            let tempPointer =this.head;
            while(tempPointer.next){
                tempPointer = tempPointer.next;
            }
            tempPointer.next = node;
        }
    }
    
}

module.exports = LinkedList;