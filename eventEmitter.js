
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