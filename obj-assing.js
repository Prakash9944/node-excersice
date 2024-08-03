var obj1 = {name: "saran", age: 12}
var obj2 = {}
Object.assign(obj2, obj1)
obj2.name = "PrakashRaj";

console.log(obj2)
console.log(obj1)

var arr1 = [1, 2, 3, 4]
var arr2 = [];
arr2.push(5,6,7)
console.log("Array Two", arr2.length)