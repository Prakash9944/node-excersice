/*1. Sorting array*/

var sortNumber = function(array) {
    if (!array.length) {
        return "Empty array!"
    }
    
    for (let a=0; a<array.length; a++) {
        for (let b= a + 1; b < array.length; b++) {
            if (array[a] > array[b]) {
                let temp = array[a];
                array[a] = array[b]
                array[b] = temp
                
            }
        }
    }
    
    return array;
}

console.log("Sort array: ", sortNumber([100, 2, 1, 72, 8, 4]))


/*2. Max number from array	*/

var findMaxNumber = function (array) {
    let maxNumber = array[0];
    
    for (let i=1; i <array.length; i++) {
        if (array[i] > maxNumber) {
            maxNumber = array[i]
        }
    }
    
    return maxNumber;
}

console.log("Find max number: ", findMaxNumber([8,1,2, 5, 89, 1, 56, 1099, 23]))

/*Binary search*/

var binarySearch = function (array, target) {
    if (!array.length) return "No length"
    
    let start = 0;
    let end = array.length -1;
    
    while(start <= end) {
        let middle = Math.floor((start + end)/2);
        
        if (array[middle] == target) {
            return middle
        }
        
        if (target > array[middle]) {
            start = middle + 1
        } else {
            end = middle - 1
        }
    }
    
    return -1
}

console.log("Binary serach: ", binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 9))

/*Factorial*/
var factors = function (fact) {
    var factors = [];
    var result = 1;
    
    for (let i =1; i <= fact; i++) {
     result *= i 
     factors.push(i)
    }
    
    return factors + " = " + result
}

console.log("Factors: ", factors(5))

/*Prime Number*/
var checkPrimeNumber = function(number) {
    if (number === 0) return "Invalid number!";
    for (let i=2; i < number; i++) {
         if (number % i === 0) {
            return false
         }
    }
    
    return true
}
console.log("Is Prime number ", checkPrimeNumber(9))

/*Polindrome*/
var isPlolindrome = function(str) {
    if (!str.length) return "Invalid string length";
    let reversLetter = "";
    
    for (let i = str.length -1; i >= 0; i--) {
        reversLetter = reversLetter + str[i]
    }
    if (reversLetter === str) {
        return "Polindrome"
    } else {
        return "Not a Polindrome"
    }
}

console.log("Debug: ", isPlolindrome("madam"))

/*Fibonocii*/
var fibonocii = function(number) {
    let start = [0, 1];
    
    for (let i=2; i < number; i++) {
        start[i] = start[i -1] + start[i - 2]
    }
    
    return start
}
console.log("Debug: ", fibonocii(10))

/*Custom sorting*/
var customSorting = function (array, order, key) {
    if (!array.length) return "Invalid length";
    
    for (let i=0; i < array.length -1; i++) {
        console.log("outer: ", array[i])
        for (let j =0; j < array.length-i-1; j++) {
            console.log("$$$$Inner: ", array[j])
            
            let a = key ? array[j][key] : array[j];
            let b = key ? array[j + 1][key] : array[j +1];
            console.log("$$$$$AAAAA", a);
            console.log("$$$$$BBBBB", b)
            let shouldSwap = order === "asc" ? a > b : b < a;
            
            if (shouldSwap) {
                [array[j], array[j+1]] = [array[j+1], array[j]]
            }
        }
    }
    
    return array
}

const users = [
  { name: 'John', age: 35 },
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 20 }
];

/*Remove duplicate element in the array*/

var removeDuplicateElem = function(array) {
    if (!array.length) return "Invalid length";
    return array.filter((item, index) => {
        return array.indexOf(item) === index
    })  
}
console.log("Debug Remove duplicate element: ", removeDuplicateElem(["Prakash", "Rahul", "Prakash", "Raj"]))

/*Find Perfect Numbers*/

var findPerfectNumber = function (limit) {
    for (let num=1; num <= limit; num++) {
        let devisor = 0;

        for (let i = 1; i < num; i++) {
            if (num % i === 0) {
               devisor += i
            }
        }

        if (devisor == num) {
            console.log("perfectNumber", devisor)
        }
    }
}
console.log("Find perfect number: ", findPerfectNumber(10))