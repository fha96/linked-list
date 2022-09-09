'use strict';

const Node = require('../node');

describe('testing nodes of linked list !', () => {


    it('test node initializing !', () => {
        const node = new Node('fahad');
        expect(node).toBeInstanceOf(Node);
        expect(node.value).toEqual('fahad');
        expect(node.next).toBeNull();
    });
});