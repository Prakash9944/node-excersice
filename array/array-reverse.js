// 1. Initialization: Start the loop with i set to the index of the last element of fruits (fruits.length - 1).
// 2. Condition: Continue the loop while i is greater than or equal to 0.
// 3. Update: Decrement i after each iteration (i--)

var fruits = ["Banana", "Orange", "Apple", "Mango"];
var reversedArray = [];

for (let i = fruits.length-1 ; i >= 0; i--) {
    console.log('Item: ', fruits[i])
    reversedArray.push(fruits[i])
}
console.log("Reversed New Array", reversedArray)

/* In-Place Array Reversal */

// 1. Initialize Pointers: Use two pointers—one starting at the beginning of the array (start) and the other at the end (end).
// 2. Swap Elements: Swap the elements at the start and end pointers.
// 3. Move Pointers: Move the start pointer one step towards the end and the end pointer one step towards the beginning.
// 4. Repeat: Continue swapping and moving pointers until they meet or cross each other.
var orderNumber = [1,2,3,4,5,6]
var doReverseNumber = function () {
    let start = 0;
    let end  = orderNumber.length -1;

    while(start < end) {
        let temp = orderNumber[start];
        orderNumber[start] = orderNumber[end]
        orderNumber[end] = temp

        start ++;
        end --
    }

    return orderNumber;
}
console.log("Reversed number: ", doReverseNumber())