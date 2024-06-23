var reversedName = "";
var name = 'Prakash';

for (let i = name.length - 1; i >= 0; i--) {
    reversedName += name[i];
}

console.log('rest', reversedName)


var reverse = "PrakashRaj";
var empty = "";

for (let i = reverse.length - 1; i >= 0; i--){
    console.log('iii', i)
    empty += reverse[i]
}
console.log("Emt", empty)



var reversedName = "";
var name = 'Prakash';

for (let i = name.length - 1; i >= 0; i--) {
    reversedName += name[i];
}

console.log('rest', reversedName)

var object = [
    {place:"here", name:"stuff"},
    {place:"there", name:"morestuff"},
    {place:"there", name:"morestuff"}
];

var uniqArray = object.filter(function (item, index) {
    var toStrin = JSON.stringify(item);

    // var result = object.findIndex(function (obj) {
    //     return JSON.stringify(obj) === toStrin;
    // });

    return index === object.findIndex(function (obj) {
        // console.log('index', JSON.stringify(obj) === toStrin)
        return JSON.stringify(obj) === toStrin; // If return true return index positions only
    });
});
console.log(uniqArray)


//     var removeDuplicate = indices.filter(function (item, index, input) {
//         return input.indexOf(item) === index;
//     });


const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
fruits.splice(2, 2);
