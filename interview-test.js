// function ArrayChallenge(arr) {

//   if (arr.lenght === 0) {
//     return 0
//   }

//   let arrayIns = new Array(arr.lenght).fill(1)
//   for (let i=1; i < arr.length; i++) {
//     for (let j =0; j <i; i++) {
//       if (arr[i] > arr[j]) {
//         arrayIns[i] = Math.max(arrayIns[i], arrayIns[j] + 1)
//       }
//     }
//   }
//   // code goes here
//   return Math.max(...arrayIns);

// }

// // keep this function call here
// console.log("Resutl ", ArrayChallenge(readline()));


// Have the function LongestIncreasingSequence(arr) take the array of positive integers stored in arr and return the length of the longest increasing subsequence (LIS). A LIS is a subset of the original list where the numbers are in sorted order, from lowest to highest, and are in increasing order. The sequence does not need to be contiguous or unique, and there can be several different subsequences. For example: if arr is [4, 3, 5, 1, 6] then a possible LIS is [3, 5, 6], and another is [1, 6]. For this input, your program should return 3 because that is the length of the longest increasing subsequence.



// function SearchingChallenge(str) {
//   let stack = [];
//   let varOcg = 0; // __define-ocg__

//   for (let char of str) {
//     if (char === '(' || char === '[') {
//       stack.push(char);
//     } else if (char === ')' || char === ']') {
//       if (stack.length === 0) {
//         return 0;
//       }
//       let last = stack.pop();
//       if ((char === ')' && last !== '(') || (char === ']' && last !== '[')) {
//         return 0;
//       }
//       varOcg++;
//     }
//   }

//   // Check if there are any unmatched opening brackets left in the stack
//   if (stack.length > 0) {
//     return 0;
//   }

//   return 1 + " " + varOcg;
// }

// // keep this function call here
// console.log(SearchingChallenge(readline()));



var array = [10, 1, 7, 2, 8, 3, 4, 5, 9];

for (let i=0; i< array.length; i++) {
    for (let j=1; j > i; j++) {
        if (array[i] < array[j]) {
            var arr = array[i]
            array[i] = array[j];
            array[j] = arr;
        }
    }
}

console.log("array", array)