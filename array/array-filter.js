//  while the filter method is used to select certain items of an array. Comparing the performance between the methods is moot, as only one of them does what you want to do

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(function (word) {
    return word.length > 6
});
console.log("result", result)


var arry = ['Prakash', 'Saran', 'Prakash', 'value'];
var result = arry.filter(function (item, index, input) {
    var regex = new RegExp('a', 'ig');
    var data = item.match(regex);
    // console.log('data', data)
    return data.length >= 2;
})
// console.log("result", result)

var result = arry.filter(function (item, index, input) {
    return input.indexOf(item) == index;
})
console.log("result", result)


var array1 = ['Apple', 'Orange','Grapes','Banana','PineApple']
var array2 = [ 'Orange','Grapes', 'Guva']
// var array3 = [ ...array1, ...array2 ];
var array3 = array1.concat(array2)
console.log('array3', array3)
let uniqueArray = array3.filter((item, index) => {
    return array3.indexOf(item) === index
})

console.log('uniqueArray', uniqueArray)

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin"];
const arr4 = ['Apple', 'Orange','Grapes','Banana','PineApple']
const children = arr1.concat(arr2, arr3, arr4);
console.log('children', children)