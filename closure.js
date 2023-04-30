//  Global variables can be made local (private) with closures.

//  Closure gives you access to an outer function scope[variable] from inner function

function outerFun() {
  var outerVal = 20

  function innerFun() {
    console.log(outerVal)
  }
  return innerFun();
}
console.log(outerFun())