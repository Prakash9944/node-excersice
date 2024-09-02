// Filter with Index Tracking

// 1. For each element, if the index of its first occurrence is the same as the current index, it means that this element is unique up to this point in the array.
// 2. If the condition is true, the element is included in the uniqueArrayElements array; otherwise, it’s filtered out.
// 3. It works by comparing the current index of each item with its first occurrence index.

var object = [
    {place:"here", name:"stuff"},
    {place:"there", name:"morestuff"},
    {place:"there", name:"morestuff"}
];

var uniqueElements = object.filter(function (item, index) {
    let toString = JSON.stringify(item);
    return index === object.findIndex(function (obj) {
        return JSON.stringify(obj) === toString; // If return true return index positions only
    });
});
console.log("Unique array of objects", uniqueElements)

/*================################=================################================*/
var ages = [3, 10, 18, 20];
var result = ages.findIndex(checkAge);
function checkAge(age) {
  return age > 18;
}
console.log('Find Index: ', result)

/*================################=================################================*/
let array = [1, 2, 2, 3, 4, 4, 5];
let uniqueArrayElements = array.filter(function(item, index){
    return array.indexOf(item) === index
}) ;
console.log("Unique array elements ", uniqueArrayElements); // [1, 2, 3, 4, 5]

/*================################=================################================*/
// Online JavaScript Editor for free
// Write, Edit and Run your JavaScript code using JS Online Compiler
var x = 10;
var y = x++;
var z =++x;
console.log("Welcome to Programiz!", x, y,z);

/*================################=================################================*/
const arr = [1, 2, 3, 2, 4, 5, 3];
const duplicates = [];
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] === arr[j] && !duplicates.includes(arr[i])) {
      duplicates.push(arr[i]);
    }
  }
}
console.log(duplicates); // [2, 3]

const arr = [1, 2, 3, 2, 4, 5, 3];
const duplicates = [];
const seen = new Set();

arr.forEach(item => {
  if (seen.has(item)) {
    duplicates.push(item);
  } else {
    seen.add(item);
  }
});

console.log(duplicates);

/*================################=================################================*/
var array1 = [2, 3, 4, 5, 7];
var array2 = [1, 23, 4, 53, 7, 10, 11, 45]

var result = array2.filter((item, index)=> {

    return array1.indexOf(item) != index
});
console.log("result", result)

/*================################=================################================*/
/*Using a Set:*/
// 1. A Set automatically handles uniqueness with average O(1) time complexity for insertions and lookups.
let array = [1, 2, 2, 3, 4, 4, 5];
let uniqueArrayElements = [...new Set(array)];

/*================################=================################================*/
/*Using a HashMap: HashMap-based algorithm */

function getUniqueElements(arr) {
    const seen = new Map();

    return arr.filter(item => {
        if (!seen.has(item)) {
            seen.set(item, true);
            return true;
        }
        return false;
    });
}