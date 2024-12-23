var arr = [1, 2, 3, 2, 2, 3, 4];
var uniqueNumber = 0;
var obj = {};

arr.filter((item, index) => {
    if (arr.indexOf(item) == index) {
        uniqueNumber = uniqueNumber + 1
    }

    obj[item] = (obj[item] || 0) + 1
    // if (obj[item]) {
    //     obj[item] = obj[item] + 1
    // } else {
    //     obj[item] = 1
    // }
})

for (let key in obj) {
    if (obj[key] == 1) {
        console.log(key, ": ", obj[key])
    }
}



console.log("uniqueNumber", obj)