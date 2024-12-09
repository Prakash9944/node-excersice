1. what is event loop
2. next tick and setimmeditate
3. closure
4. callback que
5. hoisting
6. let var const
7. fetch data same time multiple api call



// var removeDuplicate = function (array) {
//     // let removed = array.filter((item, index) => {
//     //     return array.indexOf(item) == index
//     // });

//     let newArray = [];
//     let obj = {};

//     for (let i=0; i < array.length; i ++) {
//         let item = array[i];
//         if (!obj[item]) {
//             obj[item] = true;
//             newArray.push(item)
//         }

//     }

//     return newArray
// }

// var arry = ["node", "java", "javascript", "node"]
// console.log("Removed Duplicate elemnet", removeDuplicate(arry))


// var str = "prakash";
// var reversedStr = "";

// for (let i = str.length -1; i >= 0; i-- ) {
//     reversedStr += str[i]
// }

// console.log("Reversed string: ", reversedStr)


// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]


var sumPairElement = function (input, target) {

    for (let i =0; i < input.length; i++) {

        for (let j=1; j < input.length; j++) {

            let sum = input[i] + input[j]
            if (sum == target) {
                return i + " : " + j
            }

        }

    }

}

console.log("sumPairElement: ", sumPairElement([2,7,11,15], 9))





















