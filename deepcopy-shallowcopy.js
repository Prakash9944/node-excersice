// https://www.youtube.com/watch?v=g8v7gK-kTNo

//  Primitive data type are can do deep copy which mean its copy value not reference
// var a = 10;
// var b = a; // Deep copy happen here value copied not reference
// b = 20;
// console.log(a)
// console.log(b)

// var bool1 = true;
// var bool2 = bool1; // Deep copy happen here value copied not reference
// bool2 = false;

// console.log(bool1)
// console.log(bool2)

var array1 = [1, 2, 3, 4]
// var array2 = array1;
var array2 = [...array1]; // Here values are copied not reference
array2[0] = 100;
console.log('array', array1) // Here array1 AND ARRAY2 do swallow copy which mean its copied reference not values
console.log('array', array2)


var obj1 = {
    name : "Prakash",
    age: 25
}
var obj2 = obj1
// var obj2 = obj1
var obj2 = {...obj1}
obj2.name = 'RajalakshmiPrakash' // Here original object has been changed this is we are calling shallow copy(using references shallow)
console.log('obj1', obj1) // Here obj1 AND obj2 do swallow copy which mean its copied reference not original values
console.log('obj2', obj2)


var studentObj = {
    name: "RajiPrakash",
    age: 25,
    mark: {
        m1: 60,
        m2: 80,
        m3: 90
    }
}
var studentObj2 = { ...studentObj } // Here mark copied from reference not values here
studentObj2.mark.m1 = 700

var obj22 = Object.assign({}, studentObj)
console.log(obj22, "studentObj", studentObj)
console.log("studentObj2", studentObj2)
