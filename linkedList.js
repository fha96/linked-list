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

    delete(value){
        if(!this.head){
            console.log('your list is already empty');
        } else {
            let newList= this.head;
            let target = this.head;
            
            let counter=1;
            while(target.value !== value){
                target = target.next;
                counter ++;
            }
            for(let i = 1; i <counter-1;i++ ){
                newList = newList.next;
            }
            let holder = target.next;
            // console.log('holder :',holder);
            // console.log('target:',target);
            // console.log('newList:',newList);
            newList.next = holder;
            console.log('ll',this.head);
        }
    }
    
}
const ll = {
    head:{
        value:'fahad',
        next:{
            value:'ahmd',
            next:{
                value:'anas',
                next:{
                    value:'faris',
                    next:null
                }
            }
        }
    }
}

module.exports = LinkedList;