// function palindrome(str) {
//     console.log('str', str)
//     var len = str.length;
//     var mid = Math.floor(len/2);
//     console.log('mid', mid)
//     for ( var i = 0; i < mid; i++ ) {
//         console.log(str[i] , str[len - 1 - i])
//         if (str[i] !== str[len - 1 - i]) {
//             console.log('asdsa')
//             return false;
//         }
//     }

//     return true;
// }

// var data = palindrome('madam');
// console.log('data', data)


// 1) Find the next palindrome number. If I pass any integer value to function it should return the next palindrome number.
// For example:
// If I pass 105 - it should return 111
// If I pass 100 - it should return 101


function nextPalindrome(n) {
  n++;
  console.log('n', n)
  while (!isPalindrome(n.toString())) {
    n++;
  }
  return n;
}

function isPalindrome(str) {
    console.log('str', str)
  return str === str.split("").reverse().join("");
}


// var result = nextPalindrome(112);
// console.log('result', result)


// 2) Print the first “n” prime numbers. N is anything a user might enter.
// For example:
// n = 5 Output is 2,3,5,7,11
// n = 8 Output is 2,3,5,7,11,13,17,19


// function printPrimes(n) {
//   let primes = [];
//   let num = 2;

//   while (primes.length < n) {
//     let isPrime = true;

//     for (let i = 0; i < primes.length && primes[i] <= Math.sqrt(num); i++) {
//       if (num % primes[i] === 0) {
//         isPrime = false;
//         break;
//       }
//     }

//     if (isPrime) {
//       primes.push(num);
//     }

//     num++;
//   }

//   console.log(primes);
// }

// printPrimes(8)