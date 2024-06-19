var arr = [3, 6, 2, 56, 32, 5, 89, 32];
var largest = arr[0];

// Using For loop
for (var i = 0; i < arr.length; i++) {
    if (largest < arr[i] ) {
        largest = arr[i];
    }
    // console.log('largest', largest)
}
console.log(largest);

// // Using Math.max function
// let array = [10, 5, 25, 8, 20];
// let maxElement = Math.max(...array);
// console.log(maxElement);

// Using reduce function
// let array = [10, 5, 25, 8, 20];
// let maxElement = array.reduce(function(a, b) {
//   return Math.max(a, b);
// });

// console.log(maxElement); // Output: 25


