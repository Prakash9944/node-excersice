// 1. Bubble sort is a sorting algorithm that starts from the first element of an array and compares it with the second element. If the first element is greater than the second, we swap them. It continues this process until the end of the array, with the largest elements “bubbling” to the top.

// 2. Bubble Sort compares adjacent elements and swaps them if they are in the wrong order, progressively "bubbling" the largest unsorted element to its correct position.

let numbers = [10, 4, 2, 7, 1, 9];
for (let i =0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
        if (numbers[i] > numbers[j]) {
            let temp = numbers[i];
            numbers[i] = numbers[j]
            numbers[j] = temp

        }
    }
}
console.log("Compare first element is greater than second we need change the element positions", numbers) // [ 1, 2, 4, 7, 9, 10 ]

/*====================================================*/

// Linear Search for Maximum Value(The linear search algorithm is a straightforward and efficient way to find the maximum number in an array,)

// 1. Initialize: Start with the first element of the array as the current maximum.

// 2. Iterate: Loop through each element in the array

// 3. Compare: For each element, compare it with the current maximum

// 4. Update: If the current element is greater than the current maximum, update the maximum.

// 5. Return: After looping through all elements, the current maximum is the largest value in the array.

var maxNumbers = [5, 12, 8, 130, 44, 11, 1111, 8976];
var largest = maxNumbers[0];

for (let i = 0; i < maxNumbers.length; i++) {
  if (maxNumbers[i] > largest) {
    largest = maxNumbers[i];
  }
}
console.log("Max number: ", largest);

var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log("Sorted order: ", fruits.sort());