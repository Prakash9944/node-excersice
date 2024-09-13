<div class="cl1" id="id1"></div> red
<div class="cl2" id="id2"></div> green
<div class="cl1 cl2" id="id3"></div> green

id1 blue
cl1 red
cl2 green


The span text


var replaceHello =  "Hello to E5 Hello to E5 Hello to E5 Hello to E5";
var splitted = replaceHello.split("Hello").join("welcome")



var number  = 10
var strNumber  = "10"
number === strNumber  false check
number == strNumber  true

var obj = {
    name: sfd
}

var obj  = { a: 1, b: 'abc', c: 10.4, d: 'def' }
var ss = { ...obj }
var str = "madam"
var reversed = str.split("").reverse().join()

if (str == reversed) {
    console.log("Its polindrome")
}

var search = {
    email: {
        $regex: "test.com"
    }
}

User.find(search).excueutins()

Visalakshi
6:09 PM
<div class="cl1" id="id1"></div>
<div class="cl2" id="id2"></div>
<div class="cl1 cl2" id="id3"></div>
Visalakshi
6:21 PM
"Hello to E5"
"Hello to E5" => "Welcome to E5"
Visalakshi
6:24 PM
"Hello to E5 Hello to E5 Hello to E5 Hello to E5"
Visalakshi
6:36 PM
{ a: 1, b: 'abc', c: 10.4, d: 'def' }
{ a: 1, b: 'abc', d: 'def' }
Visalakshi
6:43 PM
racecar
Visalakshi
6:50 PM
"test.com"
Visalakshi
7:01 PM
css order of precedence
text.split("hello").join("welcome")
const { c, ...rest } = obj;