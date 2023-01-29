const displayAmount = (() => {
    console.log('amount' , amount)
});

console.log('First' , displayAmount())
const amount = 999;

// Object.assign
let x = {a: 1, b: 2};
let y = {b: 3, c: 4};
let z = Object.assign({}, x, y);
console.log(z);