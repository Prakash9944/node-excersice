// A prime number has exactly two divisors: 1 and itself.
// Prime numbers are defined as having exactly two distinct divisors.
// The number 1 only has one divisor (1 itself), so it does not meet the definition of a prime number
var primeNumber = [];
var checkPrimeNumberOrNot = function (number) {

	for (let i = 2; i < number; i++) {
		if (number % i === 0) {
			primeNumber.push(number)
			return false;
		} else {
			primeNumber.push(i)
		}
	}

	return true;
}

var num = 7;
// var isPrimeNumber = checkPrimeNumberOrNot(num)

// if (isPrimeNumber) {
// 	console.log(`Number ${num} is Prime number`, primeNumber)
// } else {
// 	console.log(`Number ${num} not Prime number`, primeNumber)
// }

var findPerfectNumber = function (num) {
    let perfectnumber = 0;
    let perfectnumbesr = []
    
    for(let i =1; i <= num / 2; i++) {
        if ((num % i) === 0) {
            console.log("i", i)
            perfectnumber += i
            perfectnumbesr.push(i)
        }
    }
    
    if (perfectnumber === num) {
        console.log(perfectnumbesr, "findPerfectNumber", perfectnumber)
    } else {
        console.log(perfectnumbesr, "not findPerfectNumber", perfectnumber)
    }
}

// findPerfectNumber(100)


var findPerfectNumber = function (limit) {
    let perfectnumbesr = []

    for (let num = 1; num <= limit; num++) {
        let divisor = 0;
        console.log(    "num", num)
        for(let i =1; i < num; i++) {
            console.log(    "iiii", i)
            if (num % i === 0) {
                divisor += i
            }
        }

        if (divisor === num) {
            perfectnumbesr.push(num)
        }
        
    }
}

findPerfectNumber(50)