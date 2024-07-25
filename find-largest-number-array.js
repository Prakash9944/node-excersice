// Linear Search for Maximum Value(The linear search algorithm is a straightforward and efficient way to find the maximum number in an array,)

// 1. Initialize: Start with the first element of the array as the current maximum.

// 2. Iterate: Loop through each element in the array

// 3. Compare: For each element, compare it with the current maximum

// 4. Update: If the current element is greater than the current maximum, update the maximum.

// 5. Return: After looping through all elements, the current maximum is the largest value in the array.

var maxNumbers = [5, 12, 8, 130, 44, 11, 1111];
var largest = maxNumbers[1];

for (let i = 0; i < maxNumbers.length; i++) {
  if (maxNumbers[i] > largest) {
    largest = maxNumbers[i];
  }
}
console.log("Max number: ", largest);

var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log("Sorted order: ", fruits.sort());