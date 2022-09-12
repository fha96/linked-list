'use strict';


const LinkedList = require('../linkedList');


describe('testing linked list !', () => {


    it('test creating linked list !', () => {
        const ll = new LinkedList();
        expect(ll).toBeInstanceOf(LinkedList);
        expect(ll).toBeDefined();
        expect(ll.head).toBeNull();
    });

    it('test add a node to the first of an empty linked list', () => {
        const ll = new LinkedList();
        ll.insert('fahad');
        expect(ll).toBeInstanceOf(LinkedList);
        expect(ll.head).not.toBeNull();
        expect(ll.head.value).toEqual('fahad');
        expect(ll.head.next).toBeNull();
    });

    it('test add a node to the first of non-empty linked list', () => {
        const ll = new LinkedList();
        ll.insert('fahad');
        ll.insert('ahmd');
        expect(ll).toBeInstanceOf(LinkedList);
        expect(ll.head).not.toBeNull();
        expect(ll.head.value).toEqual('ahmd');
        expect(ll.head.next.value).toEqual('fahad');
        expect(ll.head.next.next).toBeNull();
    });

    it('test add a node to the end to an empty linked list ', () =>{
        const ll = new LinkedList();
        ll.append('fahad');
        expect(ll).toBeInstanceOf(LinkedList);
        expect(ll.head.next).toBeNull();
        expect(ll.head.value).toEqual('fahad');
    });

    it('test add a node to the end of non-empty linked list',() => {
        const ll = new LinkedList();
        ll.append('fahad');
        ll.append('ahmd');
        ll.append('anas');
        expect(ll).toBeInstanceOf(LinkedList);
        expect(ll.head.value).toEqual('fahad');
        expect(ll.head.next.value).toEqual('ahmd');
        expect(ll.head.next.next.value).toEqual('anas');
        expect(ll.head.next.next.next).toBeNull();
    
    });
    it('test delete a node by its value from linked list', () => {
        const ll = new LinkedList();
        ll.append('fahad');
        ll.append('ahmd');
        ll.append('anas');
        ll.append('faris');
        console.log(ll.head);
        ll.delete('faris');
        console.log(ll.head);
        expect(ll).toBeInstanceOf(LinkedList);
        expect(ll.head.value).toEqual('fahad');
        expect(ll.head.next.value).toEqual('ahmd');
        expect(ll.head.next.next.value).toEqual('anas');
    });
    it('test delete middle node', () => {
        const ll = new LinkedList();
        ll.append('fahad');
        ll.append('ahmd');
        ll.append('anas');
        ll.append('faris');
        ll.append('abdullah');
        console.log(ll.head);
        ll.deleteMiddle();
        console.log(ll.head);
        expect(ll).toBeInstanceOf(LinkedList);
        expect(ll.head.value).toEqual('fahad');
        expect(ll.head.next.value).toEqual('ahmd');
        expect(ll.head.next.next.value).toEqual('faris');
        expect(ll.head.next.next.next.value).toEqual('abdullah');
    });

    it('test insert at specific position ', () => {
        const ll = new LinkedList();
        ll.append('fahad');
        ll.append('ahmd');
        ll.append('anas');
        console.log(ll.head);
        ll.insertAt('faris',2);
        console.log(ll.head);
        expect(ll).toBeInstanceOf(LinkedList);
        expect(ll.head.value).toEqual('fahad');
        expect(ll.head.next.value).toEqual('faris');
        expect(ll.head.next.next.value).toEqual('ahmd');
        expect(ll.head.next.next.next.value).toEqual('anas');
    });
});