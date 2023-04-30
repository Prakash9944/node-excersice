//  Primitive data type are can do deep copy which mean its copy value not reference
var a = 10;
var b = a;
console.log(a)
console.log(b)


var array1 = [1, 2, 3, 4]
// var array2 = array1;
var array2 = [...array1];
// array2[0] = 333;
// console.log('array', array1) // Here array1 AND ARRAY2 do swallow copy which mean its copied reference not values
// console.log('array', array2)


var obj1 = {
    name : "Prakash",
    age: 25
}
// var obj2 = obj1
var obj2 = {...obj1}
obj2.name = 'sdfsfds' // Here original object has been changed this is we are calling shallow copy(using references shallow)
console.log('obj1', obj1) // Here obj1 AND obj2 do swallow copy which mean its copied reference not original values
console.log('obj2', obj2)