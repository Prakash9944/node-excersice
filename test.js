// var obj = { id: '5faa4409762c5943dc2eac64',
//   custom_attributes:
//    { '$first_name': 'Skk',
//      '$last_name': 'Skk',
//      '$email': "undefined",
//      '$created': '2020-11-10T07:40:57.663Z',
//      user_id: "5faa4409762c5943dc2eac66",
//      // browserTrialEndAt: moment("2020-11-25T13:09:56.508"),
//      // apmTrialEndAt: moment("2020-11-25T13:09:56.508"),
//      // infraTrialEndAt: moment("2020-11-25T13:09:56.508"),
//      // mobileTrialEndAt: moment("2020-11-25T13:09:56.508"),
//      // syntheticTrialEndAt: moment("2020-11-25T13:09:56.508"),
//      accountName: 'asdas'
//  }
// }

// console.log("asdsadsa",obj.custom_attributes['$first_name'])

var array = [1, 2, 3, 4, 5];
for(var i = 0; i < array.length; i++) {
    setTimeout(function () {
        console.log(array[i])
    }, 1000)
}const momentDate = moment.utc(new Date())

const startOfDay = momentDate.clone().startOf("day")
const endOfDay = momentDate.clone().endOf("day")

console.log(startOfDay)
console.log(endOfDay)

