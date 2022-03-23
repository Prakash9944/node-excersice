// const array1 = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce(function (previousValue, currentValue) {
//     console.log(previousValue , currentValue)
//     previousValue + currentValue
// }, initialValue);

// console.log('sumWithInitial', sumWithInitial)


const list = [{ x: 1, y: 2 }, { x: 3, y: 4 }, { x: 5, y: 6 }, { x: 1, y: 2 }];
var uniq  = new Set(list.map(e => JSON.stringify(e)));
console.log('uniq', uniq)