    const array1 = [
      { name: 'Alice', email: 'alice@example.com' },
      { name: 'Bob', email: 'bob@example.com' },
    ];

    const array2 = [
      { name: 'John', email: 'john@example.com' },
      { name: 'John', email: 'john@example.com' },{ name: 'John', email: 'john@example.com' },
      { name: 'Alice', email: 'alice@example.com' },
    ];

  var obj = {}

  array2.forEach((item) => {
    console.log("itemitemitem", item)
    obj[item.email] = item.name
  })


    array1.forEach((item) => {
    console.log("itemitemitem", item)
    if (obj[item.email]) {
      item.exits = true
    }
  })

    console.log("objobj", array1)


  var findMaxNumber = [5, 8, 3, 9, 19, 00]
  var maxNumber = [0];

  for(let i=0; i< findMaxNumber.length; i++) {
    // console.log("Find Number: ", findMaxNumber[0])

    if (findMaxNumber[i +1] > maxNumber) {
      maxNumber = findMaxNumber[i +1]
    }
  }

  console.log("maxNumber", maxNumber)


  var printReverseOrder = 'Hi Prakash';
  var appendString = '';

  for (let i = printReverseOrder.length -1; i >= 0; i-- ) {
    appendString +=   printReverseOrder[i]
  }

  console.log("appendString", appendString)


var lang = ["Java", "Python", "Java", "Go", "PhP"]
var disticntValues = [];

for (let i =0; i < lang.length; i++) {
  // console.log("values ", i, lang[i])
  var findIndex = lang.indexOf(lang[i])
  console.log('findIndex', findIndex)

  if (findIndex != i) {
    disticntValues.push(lang[i])
  }

}

console.log('disticntValues', disticntValues)

var obj = [ {"name":"Tom"},
            {"name":"Jas"},
            {"name":"Tom"},
            {"name":"Alice"},
            {"name":"Jas"},
            {"name":"Bob"},
            {"name":"Tom"},
            {"name":"Alice"},
            {"name":"Jas"},
            {"name":"Bob"}
         ]

var count = {};

for (let i =0 ; i < obj.length; i ++) {
  let item = obj[i]
  count[item.name] = (count[item.name] || 0) + 1
}

console.log("count", count)




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


var numb = [1, 2, 3, 5, 6, 7, 8];
for(let i=0; i < numb.length; i++) {
  if (numb[i] % 2 == 0) {
    console.log("Even Number", numb[i])
  } else {
    console.log("Add number", numb[i])
  }
}




















































































