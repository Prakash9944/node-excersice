// const anotherObject = {
//     myFunction4 () {
//         console.log(this);
//     }
// }

// const obj = {

//     myFunction() {
//         console.log(this);
//     },

//     myFunction3() {
//         function myFunction4() {
//             console.log(this)
//         }

//         return anotherObject.myFunction4()
//     }
// }

// const test1 = obj.myFunction;
// console.log("test1", test1)

// test1(); // first myfunction extract from object assing test1 variable if the  function invoked directly refer to the global object and it is gives  global object

// obj.myFunction(); // if the function invoked using obj.myfunction it is gives owner object

// obj.myFunction3(); // it will give global object because myFunction4() called directly and it will return global object


// function myFucntion2 () {
//     return this
// }

// var result = myFucntion2(); // in this time myFunction called directly so its return  to the global object
// console.log(result)

// function myFucntion2 () {
//     console.log(this);
// }

// const myOwn = new myFucntion2(); // myFucntion2(); // in this time myFunction called new keyword and object created this keyword pointing to new object


// const obj =  {
//     simple() {
//         return this;
//     }
// };

// let a = obj.simple;
// console.log(obj.simple() == global);
// console.log(a() == global);

// function myFucntion () {
//     return this
// }

// const myOwn =  myFucntion();
// myOwn.a = 100;
// console.log("myOwn", myOwn)

// const channel = {
//     title: "cyberdude",
//     subscribe () {
//         console.log(this);
//     }
// }

// channel.share = function () {
//     console.log('this', this)
// }

// var global = channel.share;
// console.log(channel.share())

// const channel1 = {
//     tittle: "CyberDude",
//     video_tittle: "javascript",
//     language: ["tamil", "english", "malayalam"],
//     subscribe() {
//         console.log("this", this);
//     },

//     showVideos() {
//         this.language.forEach((lang) => {
//             console.log(this)
//             console.log(this.video_tittle, lang);
//         });
//     }
// }

// var dara = channel1.showVideos()

// function Share(channel_tittle) {
//     this.channel_tittle = channel_tittle;
//     console.log(this);
// }

// var shareVideo = new Share('Youtube channel');
// console.log(shareVideo);

// function txt() {
//     console.log(this)
// }

// txt() // When call function window will added txt () function


// var obj = {
//     thiss: function () {
//         console.log(this)
//     }
// };

// obj.thiss()

// function Construct() { // If we call without any refernces that will be global object

//     this.add = function () {
//         console.log('this', this)
//     }
// }

// var result = new Construct();
// var ss = result.add
// console.log('result', ss())