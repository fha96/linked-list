'use strict'; 


const Queue = require('../queue');



describe('Test Queue', () => {


    it('test creation', () => {
        let queue = new Queue();
        expect(queue).toBeInstanceOf(Queue);
    });


    it('test enqueue', () => {
        let queue = new Queue();
        queue.enqueue('fhd');
        expect(queue).toBeInstanceOf(Queue);
        expect(queue.isEmpty()).toBe(false);
        expect(queue.peek()).toEqual('fhd');
    });

    it('test dequeue', () => {
        let queue = new Queue();
        queue.enqueue('fhd');
        queue.enqueue('ahmd');
        let dequeued = queue.dequeue();
        expect(queue).toBeInstanceOf(Queue);
        expect(queue.isEmpty()).toBe(false);
        expect(queue.peek()).toEqual('ahmd');
        expect(dequeued).toEqual('fhd');
    });

    
    it('test peek', () => {
        let queue = new Queue();
        queue.enqueue('fhd');
        let peeked = queue.peek();
        expect(queue).toBeInstanceOf(Queue);
        expect(queue.isEmpty()).toBe(false);
        expect(peeked).toEqual('fhd');
    });
    it('test isEmpty', () => {
        let queue = new Queue();
        queue.enqueue('fhd');
        expect(queue).toBeInstanceOf(Queue);
        expect(queue.isEmpty()).toBe(false);
    });


});