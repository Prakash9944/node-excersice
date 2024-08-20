const countries = [
    {
        country: 'India', state: 'Chennai'
    },
    {
        country: 'USA', state: 'New York'
    },
    {
        country: 'USA', state: 'Alaska'
    },
    {
        country: 'Japan', state: 'Hiroshima'
    },
    {
        country: 'USA', state: 'Alaska'
    },
]

var removedDuplicate = countries.filter((item, index) => {
    // console.log('Item', item, index)
    var toString = JSON.stringify(item);

    var isSameIndex = countries.findIndex((country) => {
        // console.log("Matched string", JSON.stringify(country) === toString)
        return JSON.stringify(country) === toString
    })

    return index === isSameIndex;
});

console.log("Removed duplicate object...", removedDuplicate)



var lang = ["Java", "Python", "Java", "Go", "PhP"]
var pushDistinctValue = [];
for (let i = 0; i < lang.length; i ++) {
    let item = lang[i];
    if(lang.indexOf(item) === i) {
        pushDistinctValue.push(item)
    }
}
console.log("Try programiz.pro", pushDistinctValue);