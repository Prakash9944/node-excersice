# which one is fast read or write in mongodb

# what is nodeJs

# What is clickhouse mongodn redis

# do you use any sync mechanism for three dbs

# explain console which one is print order by

    # console.log('asdsad')

    # setTimeOut(function() {
        console.log("asdad")
        }, 3000)

    # setTimeOut(function() {
        console.log("asdad")
        }, 0)

    # console.log('asdsad')


    const array1 = [
      { name: 'Alice', email: 'alice@example.com' },
      { name: 'Bob', email: 'bob@example.com' },
    ];

    const array2 = [
      { name: 'John', email: 'john@example.com' },
      { name: 'Alice', email: 'alice@example.com' },
    ];


    array1.forEach((item) => {
        array2.forEach((items) => {
           if (item.email == items.email) {
            items.isExist = true;
           }
        })
    })

    const array1 = [
      { name: 'Alice', email: 'alice@example.com' },
      { name: 'Bob', email: 'bob@example.com' },
    ];

    const array2 = [
      { name: 'John', email: 'john@example.com' },
      { name: 'Alice', email: 'alice@example.com' },
    ];

    // Step 1: Create a Set of emails from array2
    const emailSetArray2 = new Set(array2.map(item => item.email));

    // Step 2: Find objects in array1 that do not exist in array2
    const differenceArray = array1.filter(item => !emailSetArray2.has(item.email));

    console.log(differenceArray);


    var number = 0
    function loop() {
        if (number <= 10) {
            console.log("Print", number)
            number++
            loop()
        }
    }
    loop()


const array1 = [
  { name: 'Alice', email: 'alice@example.com' },
  { name: 'Bob', email: 'bob@example.com' },
];

const array2 = [
  { name: 'John', email: 'john@example.com' },
  { name: 'John', email: 'john@example.com' },{ name: 'John', email: 'john@example.com' },
  { name: 'Alice', email: 'alice@example.com' },
];

var obj = {}
array2.forEach((item) => {
    console.log("itemitemitem", item)
    obj[item.email] = item.name
})

array1.forEach((item) => {
    console.log("itemitemitem", item)
    if (obj[item.email]) {
      item.exits = true
    }
})

console.log("objobj", array1)