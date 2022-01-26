# NodeJs Interview Questions zxczc

# 1. Why NodeJs
    Node. js is primarily used for non-blocking, event-driven servers, due to its single-threaded nature.

# 2. NodeJs Modules

    * NPM, * GLOBALS, * CALLBACKS, * EVENT, * HTTP

# 3. What is Event Loop

    * The event loop allows Node. js to perform non-blocking I/O operations despite the fact that JavaScript is single-threaded. It is done by assigning operations to the operating system whenever and wherever possible

# 4. what is Event Emitter in nodejs

    * EventEmitter provides multiple properties like on and emit. on property is used to bind a function with the event and emit is used to fire an event.

# 5. SetInterval and SetTimeOut differences

    * setTimeout allows us to run a function once after the interval of time. setInterval allows us to run a function repeatedly, starting after the interval of time, then repeating continuously at that interval

# 6. Array Filter

    * The filter() method creates a new array with all elements that pass the test implemented by the provided function.

# 7. Array Find

    * The find() method returns the value of the first element in the provided array

# 8. Array Map

    * The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

# 9. Array Shift

    * The shift() method removes the first element from an array and returns that removed element.

# 10. Array Unshift

    * The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.

# 11. Array Join

    * The join() method creates and returns a new string by concatenating all of the elements in an array.

# 12. Array pop

    * The pop() method removes the last element from an array and returns that element.

# 13. Array IndexOf

    * The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.

# 14. what is callback function

    * a function passed into another parameter called callback function

    * callback is a function called at the completion of a given task; this prevents any blocking,

# 15. what is promise

    *  promise is an object that may produce a single value some time in the future: either a resolved value, or a reason that it's not resolved

        1. fulfilled, rejected, or pending

# 16. what is async/await

    * Node to deal with Promises and function chaining.

# 17. what is Normal function

    * Regular functions created using function declarations or expressions are constructible and callable. Since regular functions are constructible, they can be called using the new keyword

# 18. what is arrow function

    * If there’s only one argument, then the parentheses are not required either:

        let squareNum = x => x * x;

    * What if there are no arguments?

        let sayHi = _ => console.log(“Hi”);


    with paranthese
    * arrow functions are only callable and not constructible, i.e arrow functions can never be used as constructor functions.

# 19. what is streams

    * Streams are a way to handle reading/writing files, network communications

        1. Writable: streams to which we can write data. For example, fs.createWriteStream() lets us write data to a file using streams.

        2. Readable: streams from which data can be read. For example: fs.createReadStream() lets us read the contents of a file.

        3. Duplex: streams that are both Readable and Writable. For example, net.Socket

        4. Transform: streams that can modify or transform the data as it is written and read. For example, in the instance of file-compression, you can write compressed data and read decompressed data to and from a file.

# 20. what is hosting

    * Hoisting works well with other data types and variables. The variables can be initialized and used before they are declared.

    * JavaScript only hoists declarations, not initializations. If a variable is declared and initialized after using it, the value will be undefined

    * Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function).

    * js identifies the variable not initialization


    #1 Arrow function are not hosted

    #2 Arrow function not need function declaration keyword

    #3 In Arrow function this keyword binded to parent object

    #4 Arrow function does not have new keyword and its not constructble

# 21. what is constructor function javaScript

    * A constructor is a function that creates an instance of a class which is typically called an “object”. In JavaScript

# 22. This keyword

    * This refer to current object.


# 23. Prototype

    * Prototypes allow you to easily define methods to all instances of a particular object. ... The beauty is that the method is applied to the prototype, so it is only stored in the memory once, but every instance of the object has access to it

# 24. Closure

    *  a function can acess the outside the function value that is called closure


# 25. Data types

    1. Primitive values

        * Number

        * String

        * Boolean

        * Undefined

        * Null

        * Object

        * Symbol

    2. Non-primitive values (object references)

        * Object

        * Array

        * RegExp