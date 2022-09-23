'use strict';

const Stack = require('../stack');



describe('Test Stack ', () => {



    it('test creation', () => {
        let stack = new Stack();
        expect(stack).toBeInstanceOf(Stack);
    });

    it('test push method', () => {
        let stack = new Stack();

        stack.push('1');
        stack.push('2');
        expect(stack).toBeInstanceOf(Stack);
        expect(stack.isEmpty()).toBe(false);
    });

    it('test pop method', () => {

        let stack = new Stack();
        stack.push('1');
        stack.push('2');
        let popped = stack.pop();
        expect(popped).toEqual('2');
        expect(stack).toBeInstanceOf(Stack);
        expect(stack.peek()).toEqual('1');
    });
    it('test peek', () => {
        let stack = new Stack();

        stack.push('fhd');
        stack.push('ahmd');
        stack.push('anas');
        stack.push('mhmd');
        let popped = stack.pop();
        popped = stack.pop();
        expect(stack).toBeInstanceOf(Stack);
        expect(popped).toEqual('anas');
        expect(stack.peek()).toEqual('ahmd');
    });
});