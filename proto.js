var User = function (firstName, courseCount) {

    this.courseCount = courseCount;
    this.firstName =  firstName;

    this.getCourseCount = function () {
        console.log(`Get your course count ${this.courseCount}`)
    }
}


// // User.prototype.getSome = function() {

// //     console.log('this.firstNames', firstName)
// // };


// // var r1 = new User('PrakashRaj', 10);

// // console.log('req', r1.getSome())




// // function Employee (name) {
// //     this.name = name;
// // }

// // var e1 = new Employee("Mark");
// // e1.getName = function () {
// //     return this.class = 'test'
// // }

// // console.log(e1.getName())


// var Employee = function (name) {
//     this.name = name;
// }

// Employee.prototype.getName = function () {
//     console.log(this.name)
// }


// var PermenantEmployee = function (annualSalary) {
//     this.annualSalary = annualSalary;
// }


// var employee = new Employee('Prakash');

// PermenantEmployee.prototype = employee;


// var pe = new PermenantEmployee(5000);

// pe.getName()

// console.log(pe  instanceof Employee)

// Prototype mean inherit parent object to child using __proto__

let user = {
    name: "Prakash",
    pageAccess: ["login", "dashboard", "contact"],
    set setName(value) {
        this.name =value
    },
    get getName() {
        return this.name
    }
}

let admin = {
    isAdmin: true,
    __proto__: user
}
console.log('user', user)
// "user"
// [object Object] {
//   getName: "Prakash",
//   name: "Prakash",
//   pageAccess: ["login", "dashboard", "contact"],
//   setName: undefined
// }

console.log('admin', admin)
// [object Object] {
//   getName: "Prakash",
//   isAdmin: true,
//   name: "Prakash",
//   pageAccess: ["login", "dashboard", "contact"],
//   setName: undefined
// }