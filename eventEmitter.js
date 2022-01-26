const eventEmitter = require('events');
const myEmitter = new eventEmitter();

myEmitter.on('prakashraj', function () {
    console.log("1 the event fired")
})

myEmitter.on('prakashraj', function () {
    console.log("2 the event fired")
})

myEmitter.on('prakashraj', function (data) {
    console.log("3 the event fired", data)
})

myEmitter.emit('prakashraj');