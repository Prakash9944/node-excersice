
var obj = [{"name":"Tom"},{"name":"Jas"},{"name":"Tom"},{"name":"Alice"},{"name":"Jas"},{"name":"Bob"},{"name":"Tom"},{"name":"Alice"},{"name":"Jas"},{"name":"Bob"}]
var nameCount = {};
obj.forEach((item) => {
    if (nameCount[item.name]) {
        nameCount[item.name] = nameCount[item.name] + 1
    } else {
        nameCount[item.name] = nameCount[item.name] || 1
    }
})
console.log("NAMECOUNT", nameCount)
/*===============================*/
var obj = [{"name":"Tom"},{"name":"Jas"},{"name":"Tom"},{"name":"Alice"},{"name":"Jas"},{"name":"Bob"},{"name":"Tom"},{"name":"Alice"},{"name":"Jas"},{"name":"Bob"}]
var nameCount = {};

obj.forEach((item) => {
    nameCount[item.name] = (nameCount[item.name] || 0) + 1
})
console.log("NAMECOUNT", nameCount)
/*===============================*/

function findPairWithSum(target, array) {
  var seen = new Set() // 6, 4, 0, 3, 5
  for (let num of array) {

    let complement = target - num;
    console.log("complement", complement)

    if (seen.has(complement)) {
      return [complement , num]
    }

    seen.add(num)
  }

  console.log("seenseen", seen)

}

var targetNumber = findPairWithSum(8, [2, 4, 8, 5, 3])
console.log("targetNumber", targetNumber)

/*
    Find max value using reduce method
*/

var sortArray = [3, 5, 1, 30, 100]
var sortedResult = sortArray.reduce(function(max, cur) {
    return cur > max ? cur : max;
}, sortArray[0])

console.log("Debug: ", sortedResult)


var findMaxNumber = function (array) {
    var currentMaxNumber = array[0];
    
    for (let i=0; i < array.length; i++) {
        if (currentMaxNumber > array[i]) {
            currentMaxNumber = array[i]
        }
    }
    
    return currentMaxNumber;
}


console.log("Debug Log: Max number ", findMaxNumber([4, 5, 6, 1, 8, 10, 78, -89]))





var loopObject = function (arry) {
    
    arry.forEach((item, key) => {
        let type =  typeof item;
        
        if (Array.isArray(item)) {
            loopObject(item)
        } else if (type === 'object') {
            Object.keys(item).forEach((key) => {
                let value = item[key]
                loopObject([value])
                console.log("DEBUG: ", value, ": ", typeof value)
            })
        }
    })
}


var arrayObj = [{
    name: "Prakash",
    age: 28,
    address: [{
        city: "xxxx",
        street: "yyyy",
        state: "zzzz"
    }]
}]
loopObject(arrayObj)