#
    const user = {name: “Mike”};
    const user2 = user;
    user2.name = 'John';
    console.log(user.name); // ???
    console.log(user2.name); // ???


function () {} vs () => {}

function a() { console.log(this);}
a(); // ??
a.bind({x: 1}).call({x: 2}); // ??


 Promise.resolve().then(() =>log(1))
setTimeout(() =>log(2))
Promise.resolve().then(() =>log(3))
log(4)


/1 -> return "asf"
/2 -> for (...1m times); return "aaa"


const foo = {a: 1, b:2, c: 3};
type T = keyof foo

type B = Pick<User, ‘id’ | ‘name’>
type C = Required<User>;
type D = Partial<User>;


lifecycle hooks

Observable vs Subject

swtichMap


Write function to find the most used char in a string: "affaadddddccddddeefffeedd":


var findMostUsedChar = function (str) {

    var obj =  {}
    for (let i =0; i < str.length; i++) {
        let val = str[i]
        obj[val] = (obj[val] || 0 ) + 1
    }

    var array =  []

    for (let key in obj) {
        array.push(obj[key])
    }
    var maxValue = Math.max(...array)
    console.log("array", )

    for (let key in obj) {
        if (obj[key] == maxValue) {
          console.log("Max value", key, maxValue )
          return key, maxValue
        }
    }
}

console.log("Retuyn", findMostUsedChar("qwerrrrrr"))





function a() {
console.log(this);
}
a(); // ??

a.bind({x: 1}).call({x: 2}); // ??

Promise.resolve().then(() =>log(1))
setTimeout(() =>log(2))
Promise.resolve().then(() =>log(3))
log(4)


const foo = {a: 1, b:2, c: 3};
type T = keyof foo




Write function to find the most used char in a string: "affaadddddccddddeefffeedd":

var array =  []

var findMostUsedChar = function (str) {

    var obj =  {}
    for (let i =0; i < str.length; i++) {
        obj[str[i]] = (str[i] || 0 ) + 1
    }

    var array =  []

    for (let key in obj) {
        array.push(obj[key])
    }

    console.log("array", Math.Max(...array))
}


var findMostUsedChar = function (str) {

    var obj =  {}
    for (let i =0; i < str.length; i++) {
        let val = str[i]
        obj[val] = (obj[val] || 0 ) + 1
    }

    var array =  []

    for (let key in obj) {
        array.push(obj[key])
    }
    var maxValue = Math.max(...array)
    console.log("array", )

    for (let key in obj) {
        if (obj[key] == maxValue) {
          console.log("Max value", key, maxValue )
          return key, maxValue
        }
    }
}

console.log("Retuyn", findMostUsedChar("qwerrrrrr"))

var findMostUserChar =  function (chars) {
    let char = ''
    let maxCount = 0
    let charCount = {}

    for (let i=0; i < chars.length; i++) {
        charCount[chars[i]] = (charCount[chars[i]] || 0) + 1;
        if (charCount[chars[i]] > maxCount) {
            char= chars[i]
            maxCount = charCount[chars[i]]
        }
    }

    return char + " Max char "+ maxCount
    console.log("Maximu charCount: ", charCount)
}

var finded = findMostUserChar("asssrrr")
console.log("Maximu char: ", finded)