var object = [
    {place:"here", name:"stuff"},
    {place:"there", name:"morestuff"},
    {place:"there", name:"morestuff"}
];

var uniqArray = object.filter(function (item, index) {
    var toStrin = JSON.stringify(item);

    var result = object.findIndex(function (obj) {
        return JSON.stringify(obj) === toStrin;
    });

    console.log('index', index)
    console.log('result', result)
});
console.log(uniqArray)

// var ages = [3, 10, 18, 20];
// var result = ages.findIndex(checkAge);

// function checkAge(age) {
//   console.log('age', age)
//   return age > 18;
// }
// console.log('result', result)

