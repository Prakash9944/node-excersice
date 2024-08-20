
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