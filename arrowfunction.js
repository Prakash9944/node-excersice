
// console.log(x());  // Arrow fucntion not hoisting concept
// var x = () => {
//     return 100;
// }

// host(100)
// function host (number) {
//     console.log("number is ", number)
// }


// const obj = {
//     someMethod: () => {
//         return this;
//     }
// }
// var a = obj.someMethod;
// console.log("asdas", a); // in arrow function this keyword binded(refer) to parant object
// console.log("obj.someMethod", obj.someMethod());


// function myFucntion() {
//     var name = 10;
//     return () => {
//         return this.name;
//     }
// }

// const myObj =  new myFucntion();
// console.log(myObj.name)
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
//         setTimeout(function () {
//             // console.log("Third Print", this)
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
//         setTimeout( () => {
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