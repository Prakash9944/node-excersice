// function first() {
//     console.log(" first call back function");
// }

// function second(callback) {
//     console.log("second call back function");
//     console.log(callback());
// }


// second(first);

// function callbackFunction() {
//     console.log('callback function executed')
// }

// function mainFunction() {
//     console.log('Main function executed');
//     callbackFunction()
// }

// mainFunction(callbackFunction);


function fetchData(callback) {
    setTimeout(() => {
        var data = { id: 1, name: 'John Doe' };
        callback(data); // Invoke the callback function
    }, 1000);
}

function displayData(data) {
    console.log('Data:', data);
}

fetchData(displayData)