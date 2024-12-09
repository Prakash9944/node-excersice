//Factory function returning object or anything
function createPerson (name) {
    // console.log(this)

    return {
        name: name,
        greeting: () =>  {
           console.log(this)
        }
     }
}

var result = createPerson('sd');
// result
console.log('result', result.greeting())


// Constructor function initializing object
function Person (name) {
    this.name = name;
    this.greeting = function () {
       console.log('this', this)
    }
}

let person = new Person('Prakash');
console.log(person.greeting())

const person = {
    name: "Prakash",
    age: 24,
    contactInfo: {
        email: "emailAddress",
        fb: "facebook"
    }
}

const Object  = {...person};

Object.contactInfo.email = 'hello@gmail.com'

console.log(Object)


var usages = {
    '1234': {
        name: 'Prakash',
        age: 23,
        address: 'checnnai'
    },
    '1235': {
        name: 'Prakash',
        age: 23,
        address: 'checnnai'
    },
    '1236': {
        name: 'Prakash',
        age: 23,
        address: 'checnnai'
    },
    '1237': {
        name: 'Prakash',
        age: 23,
        address: 'checnnai'
    },
    '1238': {
        name: 'Prakash',
        age: 23,
        address: 'checnnai'
    }
}

usages['1238'].accounts = usages['1239'] || {};

console.log('usages', usages)