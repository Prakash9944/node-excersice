var name = 'prakash';
var reverse = '';

for (let i=0; i < name.length; i++) {
    // console.log('', )
    var number = (name.length - i);
    // console.log('name.substring(name.length - number)', name.slice(name.length - number, 1))
    reverse += name.substring(name.length - number)
}

console.log('reverse', reverse);


// var reverser  = function(str){
// let string = str.split('');

//     for( i=0; i < string.length; i++){
//         string.splice(i, 0, string.pop());
//         console.log('string', string)
//     }
//     // var removeComma = new RegExp (',', 'g')
//     // console.log(string.join().replace(removeComma, ''))
// }
// reverser('Prakash')