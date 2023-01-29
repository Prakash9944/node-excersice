
// get the reference of EventEmitter class of events module
const event = require('events');

//create an object of EventEmitter class by using above reference
const eventEmitter = new event();

// eventEmitter.on('prakashraj', function () {
//     console.log("1 the event fired")
// })

// eventEmitter.on('prakashraj', function () {
//     console.log("2 the event fired")
// })

// eventEmitter.on('prakashraj', function (data) {
//     console.log("3 the event fired", data)
// })

// eventEmitter.emit('prakashraj');


// Subscribe for FirstEvent
eventEmitter.on('FirstEvent', function (data) {
    console.log('First subscriber: ' + data);
});

// Raising FirstEvent
eventEmitter.emit('FirstEvent', 'This is my first Node.js event emitter example.');