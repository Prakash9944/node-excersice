var array = [1, 2, 4, 6]

var mapResult = array.map((value) => {
    return value * 2
})

output: [2, 4, 8, 12];

var filterResult = array.filter((value) => {
    return value > 4
})


output: [6];

var array1 = ['Apple', 'orange','Grapes','Banana','PineApple']
var array2 = [ 'Orange','Grapes', 'Guva']
var array3 = [ ...array1, ...array2 ];

let uniqueArray = array3.filter((item, index) => {
    return array3.indexOf(item) == index
})


var routes = [{
    path: '/home', component: homeComponent,
    canActive: [authGard]
}]

class security implent intercept {
    intercept(req, res, next) {
        var token = req,heders.set('token': 'test')

        next ();
    }
}

Observable(data) {
    data.next();
    data.complete()
    data.error()
}
Observable.subscribe((res) => {

});

var error = functin (err){
    try {

    }
}

pipe(map, error)


1. what is filter
2. what is map
3. what is reduce
4. how to merge two array
5. remove duplicate array
6. differ b/w angular 4 and angualr 15
7. what is observable
8. what is directive and syntax
9. what is canActive and routes and syntax
10. can we product route in Angular how
11. what is authguard
12. what is interceptor
13. what is pipe
14. what is subscribe
15. ng store
16. explain ngIf and hidden

lookup

// Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3, "buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and
for (let i = 1; i <= 100; i++) {
  let output = "";
  if (i % 3 === 0) {
    output += "fizz";
  }
  if (i % 5 === 0) {
    output += "buzz";
  }
  if (output === "") {
    output = i.toString();
  }
  console.log(output);
}

# Mojin INterView

1. what is replica set and shareds

2. what is mongodB

3. REQ.query and REQ.path difference

4. what is observable and subscribe given the example

5. How can you secure your node JS application

6. what is event loop

7. how can you find the specific value in array element in MongoDB

    PersonModel.find({ favouriteFoods: { "$in" : ["sushi"]} }, ...);

8. what is