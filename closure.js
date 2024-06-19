//  Global variables can be made local (private) with closures.

//  Closure gives you access to an outer function scope[variable] from inner function

// function outerFun() {
//   var outerVal = 20

//   function innerFun() {
//     console.log(outerVal)
//   }
//   return innerFun();
// }
// console.log(outerFun())


function parentFunction() {
    let myVal =0;
    console.log("From parent function: ", myVal);

    function childFunction() {
        let age = 40;
        myVal += 1
        console.log('From child function', myVal)
    }

    console.log('age', age) // ReferenceError: age is not defined
    childFunction()
}

parentFunction()