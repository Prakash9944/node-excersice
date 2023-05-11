let numbers = [4, 2, 7, 1, 9];
              [2, 4]

for (let i = 0; i < numbers.length; i++) {
  for (let j = i + 1; j < numbers.length; j++) {
    if (numbers[i] > numbers[j]) {
      let temp = numbers[i];
      numbers[i] = numbers[j];
      numbers[j] = temp;
    }

  }
}
console.log(numbers); // Output: [1, 2, 4, 7, 9]

// numbers true
// numbers false
// numbers true
// numbers false
// numbers false

// numbers true
// numbers false
// numbers true
// numbers false
// numbers false

// numbers 4 2
// numbers 2 7
// numbers 2 1
// numbers 1 9
// numbers 4 7
// numbers 4 2
// numbers 2 9
// numbers 7 4
// numbers 4 9
// numbers 7 9
