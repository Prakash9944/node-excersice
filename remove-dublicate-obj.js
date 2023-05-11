// var object = [
//     {place:"here", name:"stuff"},
//     {place:"there", name:"morestuff"},
//     {place:"there", name:"morestuff"}
// ];

// var uniqArray = object.filter(function (item, index) {
//     var toStrin = JSON.stringify(item);

//     // var result = object.findIndex(function (obj) {
//     //     return JSON.stringify(obj) === toStrin;
//     // });

//     return index === object.findIndex(function (obj) {
//         // console.log('index', JSON.stringify(obj) === toStrin)
//         return JSON.stringify(obj) === toStrin; // If return true return index positions only
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




const array = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = array.filter(function(item, index){
    return array.indexOf(item) === index
}) ;
console.log(uniqueArray); // [1, 2, 3, 4, 5]


// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
var x = 10;
var y = x++;
var z =++x;

console.log("Welcome to Programiz!",x, y,z);