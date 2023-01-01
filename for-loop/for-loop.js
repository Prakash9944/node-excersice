//  Multiply
function multiplyAll(arr) {
  let product = 1;
  // Only change code below this line
//   console.log(arr.length);
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      console.log(arr[i][j]);
      console.log( product *= arr[i][j])
    }
  }
  // Only change code above this line
  return product;
}

multiplyAll([[1,2],[3,4],[5,6,7]]);


// console.log([[1,2],[3,4],[5,6,7]].length);

// ===============

for(let i = 0; i <= 5; i+=1) {
    console.log(i)
}
for(initialization; condition; lastExpression) {
    // code
}


// ==============

let found = false
let target = 13
const numbers = [1, 5, 13, 8, 12, 176]
for(let i = 0; !found && i < numbers.length; i += 1) {
    console.log("Inspecting number " + numbers[i])
    if (numbers[i] === target) {
        console.log("Target found!")
        found = true
    }
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let number of numbers) {
    if (number % 2 == 0) {
        console.log("Even number " + number)
        continue
    }
    console.log("Odd number " + number)
}



const names = ["Alice", "Bob", "Charlie"]

for(let i = 0; i < names.length; i += 1)
    console.log(names[i])




// ===================================

const numbers = [1, 2, 3]

// For Loop
for(let i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
}

// For-of Loop
for (let number of numbers) {
    console.log(number)
}

// While Loop
let j = 0
while(j < numbers.length) {
    console.log(numbers[j])
    j++
}

// Do-while Loop
let k = 0
do {
    console.log(numbers[k])
    k++
} while (k < numbers.length)

// Array.forEach Loop
numbers.forEach((number) => console.log(number))