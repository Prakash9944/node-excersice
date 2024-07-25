var promiseFunction = function  (argument) {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve("after 1 seconds "+ argument)
        }, 1000)
    })
}

var executeRegularFunction = async function(numbers) {
    /*The await keyword pauses the loop until promiseFunction(number) resolves.*/
    for(let number of numbers) {
        console.log('Print number: ', number)
        console.log('Executing synchronous order using for loop: ', await promiseFunction(number))
    }

    /*It also processes each number in sequence, waiting for the promise to resolve before moving to the next iteration.*/
    for(let i=0; i < numbers.length; i++) {
        console.log('Print number: ', numbers[i])
        console.log('Executing synchronous order using for loop: ', await promiseFunction(numbers[i]))
    }

    /*However, forEach does not wait for promises to resolve before moving to the next iteration.
      As a result, all numbers are processed in parallel, and the order of the logs may not be sequential*/
    numbers.forEach(async(item) => {
        console.log('Print number: ', item)
        console.log('Executing asynchronous order using forEach method from promise function: ', await promiseFunction(item))
    })
}

executeRegularFunction([10, 15, 20, 35, 56, 78, 90])