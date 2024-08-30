/*1. EventEmitter is a core module in Node.js that allows objects to communicate with each other by emitting and listening to events.*/
/*2. */


const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('order', (orderId, item) => {
    console.log(`Order received: ID = ${orderId}, Item = ${item}`);
});

eventEmitter.emit('order', 1234, 'Laptop'); // Logs: "Order received: ID = 1234, Item = Laptop"


// get the reference of EventEmitter class of events module
var event = require('events');

//create an object of EventEmitter class by using above reference
var eventEmitter = new event();

eventEmitter.on('prakashraj', function (int) {
    console.log("1 the event fired")
})

eventEmitter.on('prakashraj', function (int) {
    console.log("2 the event fired", int)
})

eventEmitter.on('prakashraj', function (int) {
    console.log("3 the event fired", int)
})

eventEmitter.emit('prakashraj', 5);


// Subscribe for FirstEvent
eventEmitter.on('FirstEvent', function (data) {
    console.log('First subscriber: ' + data);
});

// Raising FirstEvent
eventEmitter.emit('FirstEvent', 'This is my first Node.js event emitter example.');