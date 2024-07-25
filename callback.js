/*Callback Function: A function passed as an argument to another function to be executed later.*/
/*Asynchronous Programming: Callbacks are essential for handling asynchronous operations without blocking the main execution thread.*/
/*Error Handling: Callbacks often include error handling by convention (e.g., first argument for error, second for data).*/

/****************WITHOUT PARAMETERS**************************/
function first() {
    console.log("First callback function.");
}
function second(callback) {
    console.log("Second callback function.");
    callback();
}
/*Function called here*/
// second(first);

/****************WITH PARAMETERS**************************/
function mainFunction(number, cb) {
    console.log('Main function executed', number);
    cb(number)
}

function callbackFunction(name) {
    console.log('Callback function executed', name)
    return name
}

mainFunction(100, callbackFunction);

/****************WITH PARAMETERS**************************/
// function fetchData(callback) {
//     setTimeout(() => {
//         var data = { id: 1, name: 'John Doe' };
//         callback(data); // Invoke the callback function
//     }, 1000);
// }

// function displayData(data) {
//     console.log('Data:', data);
// }

// fetchData(displayData)
