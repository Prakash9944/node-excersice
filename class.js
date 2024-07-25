/*Classes are a way to create objects with shared properties and methods. */
/*Classes in Node.js are implemented using the class syntax introduced in ECMAScript 2015 (ES6). They provide a clear,
  concise way to create and manage object-oriented code.*/

class Person {
    /*The constructor method is called when a new instance of the class is created*/
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

/*Creating an instance of the Person class*/
var person = new Person('John', 30);
/*Output: Hello, my name is John and I am 30 years old.*/
person.greet();
