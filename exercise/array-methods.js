/*
    Adds one or more elements to the end of the array.
    Returns the new length of the array.
*/
let pushArr = [1, 2, 3];
pushArr.push(5, 6)
console.log("Array Push: ", pushArr)

/*
    Removes the last element from the array
    Returns the removed element.
*/
let popArr = [1, 2, 3];
let popArrs = popArr.pop();
console.log("popArr", popArrs)

/*
    Removes the first element from the array.
    Returns the removed element.
*/
let arrShift = [1, 2, 3];
let arrShifts = arrShift.shift()
console.log(arrShifts, "Remove the first element!", arrShift)

/*
    Adds one or more elements to the beginning of the array
    Returns the new length of the array.
*/
let arrUnShift = [1, 2, 3];
arrUnShift.unshift(1)
console.log("Add element: ", arrUnShift)

/*
    Adds or removes elements from any position in the array.
    first argument is the index where changes start
    second argument is how many elements to remove, and subsequent arguments are elements to add.
    splice(start, deleteCount, item1, item2)
*/
let months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
console.log("Months: ", months);

/*  Reducer
    reduce(callbackFn, initialValue)
*/
let reducer = [1,2,3,4,5].reduce(function(accumlator, currentValue) {
    return accumlator + currentValue
}, 10);

console.log("REDUCER", reducer)