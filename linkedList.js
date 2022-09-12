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

    deleteMiddle(){
        if(!this.head){
            console.log('your list is already empty');
        } else {
            let tempPointer = this.head;
            let mainPointer = this.head;
            let newList = this.head;
            let counter = 1;
            while(tempPointer.next){
                tempPointer = tempPointer.next;
                counter ++;
            }
            if(counter%2 === 0 ){
                for( let i = 1 ; i < counter/2 ; i++ ){
                    mainPointer = mainPointer.next;
                }
                console.log("main pointer : ",mainPointer);
            } else {    
                let counter2 = parseInt(counter/2)+1;
                console.log(counter2);
                for(let i = 1;i < counter2; i++){
                    mainPointer = mainPointer.next;
                }
                let holder = mainPointer.next;
                console.log("main pointer : ",mainPointer);
                console.log("holder : ",holder);
                for(let i = 1; i< counter2-1;i++){
                    newList = newList.next;
                    
                }
                newList.next=holder;
                
                console.log("newList : ",newList.next);                
                
            }
        }
    }

    insertAt(value,position){
        const node = new Node(value);
        if(!this.head){
            this.head = node;
        } else {
            let tempPointer = this.head;
            let mainPointer = this.head;
            for(let i = 1; i < position ; i++) {
                tempPointer = tempPointer.next;
            }
            for(let i = 1; i < position-1 ; i++) {
                mainPointer = mainPointer.next;
            }
            let holder = tempPointer;
            console.log('tempPointer :' ,tempPointer);
            node.next = holder;
            console.log(' new Node : ', node);
            mainPointer.next = node;
            console.log(' new list : ', mainPointer);

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