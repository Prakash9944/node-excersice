var array = ['a', 'b', 'c', 'd', 'a', 'b', 'c', 'd', 'a', 'b', 'c', 'd'];
var output = {};

for(let i =0; i< array.length; i++) {
    output[array[i]] = (output[array[i]] || 0 ) +1;
    console.log('output', output)
}