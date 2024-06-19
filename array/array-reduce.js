var array = [1,2,3,4];

var result = array.reduce(function (acc, result) {
    console.log('acc', acc);
    console.log('result', result);
    return acc+result

});

console.log(result)