// var test = new Promise(function (resolve, reject) {
//     var result;
//     setTimeout(function() {
//         console.log('First')
//     }, 1000)
//     setTimeout(function() {
//         console.log('second')
//     }, 2000)
//     setTimeout(function() {
//         console.log('third')
//     }, 4000)
//     setTimeout(function() {
//         result = true;
//         resolve(result)
//     }, 1000)


// })


// test.then(function(val) {
//     console.log('valy', val)
// })

var test = function () {

    var result =  new Promise((resolve)=> {
        return resolve(10);

    }).then((response) => {
        let total = response + 10
        console.log('total', total)
        return total + 10;
    }).then((response) => {
        let anotherTotal = response + 44;
        console.log('anotherTotal', anotherTotal)
        result = anotherTotal
        return anotherTotal
    })

    console.log('resultresult', result)

    // return {};
}
test()
// var aa = test()
// console.log("aa", test() )


var ss = new Promise((resolve, reject) => {
    // console.log("test", test)
    return resolve (test)
}).then((res) => {
    // console.log('ssss', res())
})