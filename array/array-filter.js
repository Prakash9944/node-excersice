//  while the filter method is used to select certain items of an array. Comparing the performance between the methods is moot, as only one of them does what you want to do

// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
// const result = words.filter(function (word) {
//     return word.length > 6
// });
// console.log("result", result)


var arry = ['Prakash', 'Saran', 'Prakash', 'value'];
var result = arry.filter(function (item, index, input) {
    var regex = new RegExp('a', 'ig');
    var data = item.match(regex);
    return data.length >= 2;
})


var result = arry.filter(function (item, index, input) {
    return input.indexOf(item) == index;
})