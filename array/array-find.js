// The find() method returns the value of the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

const array1 = [5, 12, 8, 130, 44];
const found = array1.find(element => element == 13);
console.log(found);
// expected output: 12


const arrays = ["prakash", "prakash", "rajalakshmi", "prakashraj"];
const founds = arrays.find(element => element == "prakash");
console.log(founds);
// expected output: 12
