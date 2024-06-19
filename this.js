// Video Link https://www.youtube.com/watch?v=ZHNe8gqqCAg&t=13s
// https://www.youtube.com/watch?v=tWDtAXhcAac

// const anotherObject = {
//     myFunction4 () {
//         console.log('this', this);
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
//         myFunction4() // This function called directly to without any references
//         return anotherObject.myFunction4()
//     }
// }

// const test1 = obj.myFunction;
// console.log("test1", test1)

// test1(); // first myfunction extract from object assing test1 variable if the function invoked directly refer to the global object and it is gives  global object

// obj.myFunction(); // if the function invoked using obj.myfunction it is gives owner object

// obj.myFunction3(); // it will give global object because myFunction4() called directly and it will return global object


// function myFucntion2 () {
//     return this
// }

// var result = myFucntion2(); // in this time myFunction called directly so its return to the global object
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
// console.log(obj.simple() , global); // This is not true because calling ob.sample() called by obj references that's reason this is return current object calling
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
//     console.log('Share', this)
// }

// var global = channel.share;
// console.log(global())
// console.log(channel.share())

// const channel1 = {
//     tittle: "CyberDude",
//     video_tittle: "javascript",
//     language: ["tamil", "english", "Malayalam"],
//     subscribe() {
//         console.log("subscribe", this);
//     },

//     showVideos() {
//         this.language.forEach((lang) => {
//             console.log("showVideos", this)
//             console.log("this.video_tittle", this.video_tittle, lang);
//         }, this);
//     }
// }


// function playVideo() {
//     console.log(this)
// }

// playVideo.call({name: "prakashraj"});

var callShowVideoFun = channel1.showVideos()
console.log("callShowVideoFun", callShowVideoFun);

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


// var objOne = {
//     thiss: function () {
//         console.log(this)
//     }
// };

// objOne.thiss

// function Construct() { // If we call without any refernces that will be global object

//     this.add = function () {
//         console.log('this', this)
//     }
// }

// var result = new Construct();
// var ss = result.add // Here i ma extract the funciton only not calling
// console.log('result', ss())


// const printNumbers = {
//   phrase: 'The current value is:',
//   numbers: [1, 2, 3, 4],
//   loop() {
//     this.numbers.forEach(function (number) {
//       console.log(this, number)
//     })
//   },
// }

// printNumbers.loop()
