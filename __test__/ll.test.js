'use strict';


const LinkedList = require('../linkedList');


describe('testing linked list !', () => {


    it('test creating linked list !', () => {
        const ll = new LinkedList();
        expect(ll).toBeInstanceOf(ll);
        expect(ll).toBeDefined();
        expect(ll.head).toBeNull();
    });

    it('test add a node to first of an empty linked list', () => {
        const ll = new LinkedList();
        ll.insert('fahad');
        expect(ll).toBeInstanceOf(LinkedList);
        expect(ll.head).not.toBeNull();
        expect(ll.head.value).toEqual('fahad');
        expect(ll.head.next).toBeNull();
    });
});