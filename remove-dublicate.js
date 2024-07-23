// var object = [
//     {place:"here", name:"stuff"},
//     {place:"there", name:"morestuff"},
//     {place:"there", name:"morestuff"}
// ];

// var uniqArray = object.filter(function (item, index) {
//     let toString = JSON.stringify(item);
//     return index === object.findIndex(function (obj) {
//         return JSON.stringify(obj) === toString; // If return true return index positions only
//     });
// });

// console.log(uniqArray)

// var ages = [3, 10, 18, 20];
// var result = ages.findIndex(checkAge);

// function checkAge(age) {
//   console.log('age', age)
//   return age > 18;
// }
// console.log('result', result)


// const array = [1, 2, 2, 3, 4, 4, 5];
// const uniqueArray = array.filter(function(item, index){
//     return array.indexOf(item) === index
// }) ;
// console.log(uniqueArray); // [1, 2, 3, 4, 5]


// // Online JavaScript Editor for free
// // Write, Edit and Run your JavaScript code using JS Online Compiler
// var x = 10;
// var y = x++;
// var z =++x;

// console.log("Welcome to Programiz!", x, y,z);


// const arr = [1, 2, 3, 2, 4, 5, 3];
// const duplicates = [];

// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[i] === arr[j] && !duplicates.includes(arr[i])) {
//       duplicates.push(arr[i]);
//     }
//   }
// }

// console.log(duplicates); // [2, 3]



var array1 = [2, 3, 4, 5, 7];
var array2 = [1, 23, 4, 53, 7, 10, 11, 45]

var result = array2.filter((item, index)=> {

    return array1.indexOf(item) != index
});

console.log("result", result)

