
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