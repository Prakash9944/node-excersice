const amounts = [400, 800, 1600, 600, 500, 1000]
const limitPerTransction = 400
 
// output 
// the person's withdraw order queue
// [1, 2, 3, 4, 5, 6, 2, 3, 4, 5, 6, 3, 6, 3]
// order of the persons who left the queue first
// [1, 2, 4, 5, 6, 3]



var string = 'hihelloworld';
var unique = '';

for (let i=0; i < string.length; i ++) {
    let index =  string.indexOf(string[i])
    if (index === i) {
        unique += string[i]
    } 
}


console.log("unique", unique)




// var test = (arg) {
    
// }


// test(123); pass by values

// var obj =  {}
// test(obj); pass by values

script:
{
    "run:dev" "source .env-dev && server.js",
    "run:prod" "source .env-prod &&  server.js"
}


const obj = {
    name: "Prakash"
}

obj.age = 10;

var objOne = {
    name: "Prakash"
}

console.log(obj == objOne)
console.log(obj === objOne)



select name from user JOIN emp ON user.name = emp.name

select name from (select name from user where name = "Prakah")

select city, count from (select city, count() from user group by city)

Drop tableName




sorting array of obect












