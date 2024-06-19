// const array1 = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce(function (previousValue, currentValue) {
//     console.log(previousValue , currentValue)
//     previousValue + currentValue
// }, initialValue);

// console.log('sumWithInitial', sumWithInitial)


// const list = [{ x: 1, y: 2 }, { x: 3, y: 4 }, { x: 5, y: 6 }, { x: 1, y: 2 }];
// var uniq  = new Set(list.map(e => JSON.stringify(e)));
// console.log('uniq', uniq)

// reduce(callbackFn, initialValue)
// var array = [10, 20, 30, 40, 50, 60];

// var result = array.reduce(function(previousVal, currentVal) {
//     console.log('previousVal, currentVal', previousVal, currentVal)

//     return previousVal + currentVal;
// });

// console.log('array', result)


var shoppingCart = [{id: 1, item: "Milk", cost: 50}, {id: 2, item: "Bread", cost: 20}, {id: 2, item: "Orange", cost: 150}];

var totalResult = shoppingCart.reduce(function(accumalator, currentVal) {
    return accumalator + currentVal.cost
}, 100);

console.log('totalResult', totalResult)