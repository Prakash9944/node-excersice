function first() {
    console.log(" first call back function");
}

function second(callback) {
    console.log("second call back function");
    console.log(callback());
}


// second(first);

function callbackFunction() {
    console.log('callback function executed')
}

function mainFunction() {
    console.log('Main function executed');
    callbackFunction()
}

mainFunction(callbackFunction);