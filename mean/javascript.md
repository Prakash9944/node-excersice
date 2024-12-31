1. Explain the difference between var, let, and const.

    # Answer:-
        1. var:-
            Function-scoped.
            Hoisted but initialized as undefined.
            Allows re-declaration within the same scope.
        2. let:-
            Block-scoped.
            Hoisted but not initialized (Temporal Dead Zone until declared).
            Cannot be re-declared within the same scope.
        3. const:-
            Block-scoped.
            Must be initialized during declaration.
            Value cannot be reassigned, but objects/arrays are mutable.

2. What is the difference between == and === in JavaScript?

    # Answer:-
        1. == (Equality Operator): Compares values after type coercion (e.g., 5 == '5' is true).
        2. === (Strict Equality Operator): Compares values and types without coercion (e.g., 5 === '5' is false).

3. How does JavaScript handle asynchronous programming?

    # Answer:-
        1. JavaScript handles asynchronous programming using:
        2. Callbacks: Functions passed as arguments to be executed later.
        3. Promises: Objects that represent eventual completion or failure of an asynchronous task. States: pending, fulfilled, rejected.
        4. async/await: Syntactic sugar for handling promises in a cleaner way.

4. What are closures in JavaScript?

    # Answer:-
        1. Scope Preservation: A closure is created when an inner function accesses variables from its outer (enclosing) function, even after the outer function has finished executing.
        2. closure is a function that "remembers" its lexical scope, even when executed outside that scope.

        function outerFunction() {
            let count = 0;
            return function innerFunction() {
                count++;
                return count;
            };
        }

        const counter = outerFunction();
        console.log(counter()); // 1
        console.log(counter()); // 2

5. What is the difference between call(), apply(), and bind()?

    # Answer:-
        1. call(): Invokes a function with a specified this and arguments passed individually.
        2. apply(): Similar to call(), but arguments are passed as an array.
        3. bind(): Returns a new function with the specified this and arguments, which can be invoked later.

        function greet(greeting, punctuation) {
            console.log(`${greeting}, ${this.name}${punctuation}`);
        }

        const person = { name: 'Alice' };

        greet.call(person, 'Hello', '!');  // Hello, Alice!
        greet.apply(person, ['Hi', '.']); // Hi, Alice.
        const boundGreet = greet.bind(person, 'Hey');
        boundGreet('!!');                 // Hey, Alice!!

6. What are prototypes in JavaScript?

    # Answer:-

        1. Every JavaScript object has a hidden property called [[Prototype]] that references another object. Prototypes are used for inheritance.
        function Person(name) {
            this.name = name;
        }
        Person.prototype.greet = function () {
            console.log(`Hello, my name is ${this.name}`);
        };

        const alice = new Person('Alice');
        alice.greet(); // Hello, my name is Alice

7. What is the difference between deep copy and shallow copy?

    # Answer:-

        1. Shallow Copy:-
            1. Copies only the first layer of properties; nested objects/arrays share the same reference.
            2. Example methods: Object.assign(), spread operator (...).

        2. Deep Copy:-

            1. Recursively copies all layers, creating a new instance of nested objects/arrays.
            2. Example methods: JSON.parse(JSON.stringify()), libraries like Lodash's cloneDeep.

            const obj = { a: 1, b: { c: 2 } };
            const shallowCopy = { ...obj };
            const deepCopy = JSON.parse(JSON.stringify(obj));

            shallowCopy.b.c = 10;
            console.log(obj.b.c); // 10 (affected in shallow copy)

            deepCopy.b.c = 20;
            console.log(obj.b.c); // 10 (unaffected in deep copy)

8. Modules and Import/Export?

    # Answer:-
        1. Modular JavaScript improves code reusability and maintainability.

    export function greet(name) {
        return `Hello, ${name}!`;
    }
    export const PI = 3.14159;

    import { greet, PI } from './module.js';
    console.log(greet('Alice')); // Output: Hello, Alice!
    console.log(`Value of PI: ${PI}`); // Output: Value of PI: 3.14159

9. Destructuring and Spread/Rest Operators?

    # Answer:-
        1. Destructuring allows you to unpack values from arrays or properties from objects into distinct variables.

    # Destructuring:-
        const user = { name: 'Alice', age: 25 };
        const { name, age } = user;
        console.log(name, age); // Output: Alice 25

    # Spread Operator:-
        1. Use the spread operator to merge or copy arrays/objects.

        const arr1 = [1, 2, 3];
        const arr2 = [...arr1, 4, 5];
        console.log(arr2); // Output: [1, 2, 3, 4, 5]

    # Rest Operator (...):-
        1. The rest operator is used to gather the rest of the elements or properties into a new array or object. It's essentially the opposite of the spread operator.
        2. Use the rest operator to handle the remaining data when destructuring.

        1. For Arrays?
            const [first, ...rest] = ["apple", "banana", "cherry", "date"];
            console.log(first); // "apple"
            console.log(rest);  // ["banana", "cherry", "date"]

        2. For Objects?
            const person = { name: "John", age: 30, city: "New York" };
            const { name, ...otherDetails } = person;

            console.log(name);          // "John"
            console.log(otherDetails);  // { age: 30, city: "New York" }

10. Higher-Order Functions?

    # Answer:-
        1. higher-order function is a function that takes one or more functions as arguments, returns a function, or both.

    function multiplyBy(factor) {
      return function (num) {
        return num * factor;
      };
    }

    const multiplyBy2 = multiplyBy(2);
    console.log(multiplyBy2(5)); // Output: 10
