let name = "Prakash"; // String Literals new String("Prakash"); => these all extract from constructor
let age = 21; // Number literals new Number (21);
let isAlive = true; // Boolean literals new Boolean(true);
let str = new String("Prakash");
let num = new Number (21);
let boo = new Boolean(true);

boo.prototype.adds = function() {
    this.error = 'Error'
}

console.log(str, num, boo)
console.log(name, age, isAlive)

function Person (name) {
    this.name = name;
    this.greeting = function () {
        console.log(this.name)
    }
}


var data = Person.call({}, "Prakash");
console.log('data', data)