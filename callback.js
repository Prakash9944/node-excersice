function first() {
    console.log(" first call back function");
}


function second (callback) {

    console.log("second call back function");
    console.log(callback());
}


second(first);