// Linear Search
// 1.Linear search is the simplest search algorithm. It works by checking every element in the list sequentially until the desired element is found or the list ends

var linearSearch = function (array, target) {
    for (let i=0; i < array.length; i++) {
        if (array[i] == target) {
            return i
        }
    }

    return -1
}

console.log("Linear search..", linearSearch([1,2,3,4,5,6,7,8,9], 7))