// const numbers = new Set([1,2,3,4,3,2,1]);
// console.log(numbers); // set function store only unique values

var outer = function() {
    let count =0;

    return function inner () {
        count++
        console.log(count)
    }
}

const outers = outer()
console.log("outers",outers)
outers()
// outers()