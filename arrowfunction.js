
// console.log(x());  // Arrow fucntion not hoisting concept
// var x = () => {
//     return 100;
// }

// host(100)
// function host (number) {
//     console.log("number is ", number)
// }


const obj = {
    name: "prads",
    someMethod: () => {
        return this;
    }
}
// var a = obj.someMethod();
// console.log("asdas", a); // in arrow function this keyword binded(refer) to parant object
// console.log("obj.someMethod", obj.someMethod());


function myFucntion() {
    var name = 10;
    return () => {
        return this.name;
    }
}

// const myObj =  new myFucntion();
// console.log(myObj)
// console.log("myObj", new myObj())


// const myFunction  = () => { // Arrow function does not have new keyword its not construct
//     return this;
// }
// const day = new myFunction();
// console.log(day())


//  DIffernces between arrow function and normal fucntion
// function myCar() {
//     console.log("First print", this)
//     this.fuel = 10;
//     this.reFuel = function () {
//         const fuel = this.fuel;
//         console.log("Second Print", fuel)
//         setTimeout(function () { // We cannot access this.fuel because when we use this keyword its refer to global object inside settimeout funciton nameless funtion called   without any execution context
//             console.log("Third Print", fuel)
//             var fuels = fuel + 100
//             console.log("fuel is", fuels)
//         }, 1000);
//     }

// }
// const benz  = new myCar();
// console.log(benz.reFuel())

// function myCar() {
//     console.log("First print", this)
//     this.fuel = 1;
//     console.log("Second Print", this)
//     this.reFuel = function () {
//         setTimeout(() => {
//             console.log("Third Print", this)
//             this.fuel += 100
//             console.log("Fourth Print", this.fuel)
//         }, 1000);

//     }
// }
// const benz  = new myCar();
// benz.reFuel(); // in arrow function this refer to parant object


// const sta  = function (){
//     console.log(this)
// }
// sta();

// const arrow  = () => {
//     console.log(this)
// }
// const arrowFun = arrow // anonymous and arrow function we cant use new keyword and also we cant call direclty
// arrowFun()


// Note
// 1. Normal function both constructable and callable
// 2. arrow function only callable




// var sum = (a,b) => a + b; // Here we don't need return because single line without curly braces does not need return
// console.log(sum(2,2))

// var sumOne = (a,b) => {
//     return a + b // Here we need to return the value because we are using curly braces more then one line we need block
// };

// console.log(sumOne(2,25))


// function test() {
//     this.name = "prakash";
//     setTimeout(function() {
//         console.log('this',this.name) // We got undefined because its not refer to name its refer to the global object because  without execution context
//     }, 1000)
// }
// // test()

// function testone() {
//     this.name = "prakash";
//     setTimeout(() => {
//         console.log('this',this.name) // its refer to the global object because its nameless function without execution context
//     }, 1000)
// }

// console.log(testone())
// console.log(new testone())



// https://www.youtube.com/watch?v=dWZIPIc3szg Link

// console.log(this)
var age  = 27;
function displayAge() {
    console.log(age)
    console.log(this)
}

// displayAge(); // Whenever javascript excute the function internally window object added window.displayAge() this rerfer to the window object

var person = {
    age: 38,
    displayAge: displayAge,
    nestedPerson: {
        age: 40,
        displayAge: displayAge
    }
}
// In javascript value of this keyword determined by how a function is called (runtime binding)
// person.displayAge() // This keyword refer to the object that is currently calling function output 38
// person.nestedPerson.displayAge() // This keyword refer to the object that is currently calling function output 40


//  THis is Normal function example
var personOne = {
    age: 25,
    greate1: function () {
        console.log("great 1", this.age);
        console.log("great 1", this)

        function greate2() {
            console.log("great 2", this.age);
            console.log("great 2", this)
        }

        greate2() // This is called without context which mean directly called
    }
}

// personOne.greate1() // THis is calling reference of personOne object

//  THis is Arrow function example  Basically arrow function does not have this keyword if you arrow function where you defined example inside object or not
var personOne = {
    age: 25,
    greate1: function () {
        console.log("great 1", this.age);
        console.log("great 1", this)

        const greate2 = () => {
            console.log("great 2", this.age);
            console.log("great 2", this)
        }

        greate2() // This is called without context which mean directly called
    }
}

// personOne.greate1() // THis is calling reference of personOne object

var age = 444;
const greate2 = () => {
    console.log("great 2", this.age);
    console.log("great 2", this)
}
greate2()