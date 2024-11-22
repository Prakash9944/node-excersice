/*
    JavaScript uses prototypal inheritance, where objects can inherit properties and methods from other objects. 
    Each object has a prototype, and if a property or method isn't found on the object itself, JavaScript looks up the prototype chain until it finds it. 
    Prototype mean inherit parent object to child using __proto__
*/
// var User = function (firstName, courseCount) {
//     this.courseCount = courseCount;
//     this.firstName =  firstName;

//     this.getCourseCount = function () {
//         console.log(`Get your course count ${this.courseCount}`)
//     }
// }

// User.prototype.getSome = function() {
//     console.log('Debug: ', this.firstName)
// };
// var instance = new User('PrakashRaj', 10);
// instance.getSome()

// var Employee = function (name) {
//     this.name = name;
// }
// Employee.prototype.getName = function () {
//     console.log(this.name)
// }
// var employee = new Employee('Prakash');
// employee.getName()


function Animal(name) {
  this.name = name;
}

Animal.prototype.sayName = function() {
  console.log(`My name is ${this.name}`);
};

function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);

const myDog = new Dog('Buddy', 'Golden Retriever');
myDog.sayName(); 
