const string = "@##!!12312@@@@";
const regex = /[^https:]/g;
result = string.replace(/(^\w+:|^)\/\//, '');

// const isExisting = regex.test(string);
// console.log(isExisting)
var dat = string.match(result)
console.log("dat", dat)
// console.log("asdadsas", dat.replace(",", ""))

// Global mean search entire text to get matched pattern
// // I Mean case sensitive
// var s1 = "JavAascript is very easy to learn";
// var s2=/a/gi;
// console.log("asdadsas", s1.match(s2))// Return matched element
// console.log("asdadsas", s1.search(s2))// Return matched element index value



var spc = /^\w+/gm;

    console.log(spc.test(string))
console.log("adasdasd", spc)