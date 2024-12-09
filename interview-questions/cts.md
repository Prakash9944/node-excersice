# Print element without loop
var run = function(array, i = 0) {
    if (i < array.length) {
        console.log("newArray", array[i]);
        run(array, i + 1);
    }
};

var array = [1, 2, 3, 4, 5, 6, 8, 9, 10];
run(array);

# Tell me order of console.log print
console.log('start');

const promise1 = new Promise((resolve, reject) => {
    console.log(1)
    resolve(2)
    console.log(3)
})

promise1.then(res => {
    console.log(res)
});
console.log('end'); 2





