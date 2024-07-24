// 1. Initialization: left and right pointers are initialized to the start and end of the array, respectively.
// 2. Loop: The while loop runs as long as left is less than or equal to right.
// 3. Middle Index Calculation: The middle index mid is calculated using Math.floor((left + right) / 2).

    // 1. If arr[mid] equals the target, return the index mid.
    // 2. If arr[mid] is less than the target, move the left pointer to mid + 1 to search in the right half.
    // 3. If arr[mid] is greater than the target, move the right pointer to mid - 1 to search in the left half.

function binarySearch(arr, target) {
    var left = 0;
    var right = arr.length - 1;

    while (left <= right) {
        var mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid; // Target found at index `mid`
        }

        if (target > arr[mid]) {
            left = mid + 1; // Search in the right half
        } else {
            right = mid - 1; // Search in the left half
        }
    }

    return -1; // Target not found
}

var sortedArray = [1, 3, 5, 7, 9, 11, 13];
var target = 5;
var result = binarySearch(sortedArray, target);
if (result !== -1) {
    console.log(`Target ${target} found at index ${result}`);
} else {
    console.log('Target not found');
}


var searchBinary = function (sortArray, target) {
    let start = 0;
    let end = sortArray.length -1;

    while(start <= end) {
        var middle = Math.floor((start + end) / 2)
        console.log("Middle value", middle)
        if (sortArray[middle] === target) {
            return middle;
        }

        if (target > sortArray[middle]) {
            start = middle + 1
        } else {
            end = middle -1
        }
    }

    return -1
}

console.log("Binary search..", searchBinary([1,2,3,4,5,6,7,8], 8))