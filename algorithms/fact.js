/*========================FIBONACCI========================*/

var base = [0, 1]
for (let i = 2; i <= 10; i++) {
    base[i] = base[i -1] + base[i -2]
    if (base[i -1] + base[i -2] == 34) {
        break
    }
}
// console.log("Print result: ", base)

/*=======================FIBONACCI=========================*/
var first = 0;
var second = 1;
var third;

var array = []
array.push(first)
array.push(second)

for (let i =0; i <=10; i ++) {
    third = first + second;
    // console.log("Print: ", third);
    array.push(third)
    first = second;
    second = third;
}
// console.log("array: ", array);

/*======================FACTORIAL==========================*/
var factorial = 5;
var number = 5;

while (number > 1) {
    number --
    // console.log("Factorial: ", factorial + " * " + number)
    factorial = factorial * number
}

// console.log("5 Factorial answer is: ", factorial)

/*======================PRIME_NUMBER==========================*/

var number = 17;
var isPrime = true;
var i = 2
while(i < number) {
    if (number % i == 0) {
        console.log("Not a Prime number is :", i)
        isPrime = false
        break;
    }

    i++
}

if (isPrime) {
    console.log("Prime number", number)
}