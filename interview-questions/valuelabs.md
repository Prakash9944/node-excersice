# what will be the output

abc()

function abc() {}
var abc = "werr"


# var a = 1
  var b = 2

var a = 1;
var b = 2;

// Swapping values using destructuring
[a, b] = [b, a];

console.log(a); // Outputs: 2
console.log(b); /


var a = 1;
var b = 2;

// Swapping values using a temporary variable
var temp = a;
a = b;
b = temp;

console.log(a); // Outputs: 2
console.log(b); // Outputs: 1



const result = [["name","ram"],["age",20]].reduce((acc, cur)=>({...acc, [cur[0]]: cur[1]}),{});

console.log("Result11", result)




// var returnObj = function () {
//     var arr = [["name","ram"],["age",20]];
//     var obj = {};
//     var [...destruct] = arr
//     console.log("destruct", destruct)
//     arr.forEach((item) => {
//         obj[item[0]] = item[1]
//     })
    
//     return obj
// }

// console.log("Result: ", returnObj())

// var fun = function () {
//   return new Promise((resolve, reject) => {
//     return setTimeout(function() {
//         return resolve(true)
//     }, 1000)
// })
// }

// var printNumber = async function () {
//     for (let i=0; i <= 5; i++) {
//         let data = await fun();
//         console.log(data, "IIII", i)
//     }
// }
// printNumber()


var fun  = function (number) {
    return new Promise((resolve, reject)=> {
        var res = number % 2 
        console.log("res", res)
        if (res == 0) {
            return resolve(true)
        } else {
            return reject(false)
        }
    })
}

var res = async function () {

   try {
        let result = await fun(11)
        console.log('resukt ', result)
   }catch(err) {
       console.log("wasfsd", err)
   }
}

res()



var express = require("express")
var app = express()
var controller = requires("./user")
var User = require("../mode/user")

app.post("/v1/accounts/:accountId/user/:userId", controller.getUserProfile)

exports.getUserProfile = async function (req, res, next) {
    var userObj = {
        id: req.body.userId
    }
    
    try {
        let userProfile = await User.findOne(userObj)
        return res.json(userProfile);
    } catch (err) {
        console.error("Error: Unable to fetch", err)
        return next(err)
    }
}


