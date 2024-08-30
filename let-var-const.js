/*VAR
    Scope: var has function scope or global scope if declared outside a function. It is not block-scoped, meaning it is accessible throughout the function in which it is declared or globally if declared outside a function.

    Hoisting: var declarations are hoisted to the top of their scope. The variable is initialized with undefined until the actual assignment is encountered.

    Reassignable: Variables declared with var can be reassigned.

    Redeclarable: Variables declared with var can be redeclared within the same scope.
*/

function exampleVar() {
    console.log(a); // undefined (due to hoisting)
    var a = 10;
    console.log(a); // 10
}
exampleVar();

// Redeclaration
var b = 20;
var b = 30;
console.log(b); // 30

/* LET
    Scope: let has block scope, meaning it is only accessible within the block (enclosed by {}) where it is declared. This makes it suitable for use in loops and conditionals.

    Hoisting: let declarations are also hoisted, but they are not initialized. Accessing them before the declaration results in a ReferenceError due to the "temporal dead zone."

    Reassignable: Variables declared with let can be reassigned.

    Redeclarable: Variables declared with let cannot be redeclared in the same scope.
*/

function exampleLet() {
    // console.log(c); // ReferenceError: Cannot access 'c' before initialization
    let c = 10;
    console.log(c); // 10

    if (true) {
        let d = 20;
        console.log(d); // 20
    }
    // console.log(d); // ReferenceError: d is not defined
}
// exampleLet();

// Redeclaration
let e = 30;
// let e = 40; // SyntaxError: Identifier 'e' has already been declared

/*
    CONST
    Scope: const has block scope, similar to let.

    Hoisting: const declarations are hoisted but are not initialized. Accessing them before the declaration results in a ReferenceError due to the "temporal dead zone."

    Reassignable: Variables declared with const cannot be reassigned after their initial assignment. This makes them immutable in terms of reassignment.

    Redeclarable: Variables declared with const cannot be redeclared in the same scope.

    Mutability: Although you cannot reassign a const variable, if the const variable holds an object or array, the contents of the object or array can still be modified.
*/


function exampleConst() {
    const f = 10;
    console.log(f); // 10
    // f = 20; // TypeError: Assignment to constant variable.

    const g = [1, 2, 3];
    g.push(4); // Allowed
    console.log(g); // [1, 2, 3, 4]

    // g = [5, 6, 7]; // TypeError: Assignment to constant variable.
}
exampleConst();

// Redeclaration
const h = 50;
// const h = 60; // SyntaxError: Identifier 'h' has already been declared
