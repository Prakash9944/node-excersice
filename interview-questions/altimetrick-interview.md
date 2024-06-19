## What is eventEmitter

## what is callback and promise

## tell me the types of setTime function

## cronJS explain how works

var User = require('User');

var createUser = async function(req, res, next) {
    var userName = req.body.userName;

    if (!userName) {
        let error = new Error('User name cannot be empty')
        return next(error);
    }


    var userPayload = {
        name: userName
    }

    try {
        let user = await User.create(userPayload);
        return user;
    } catch (err) {
        return next(err.message);
    }
}


let element = [4,5,2,7,8,9,12,1,5,4];

var result = element.filter(function (item, index) {
  return element.indexOf(item) != index;
});

console.log('resultresult', result);


var promise = new Promise((resolve, reject) => {
  if (name == 'Prakash') {
    return resolve(name)
  } else {
  return reject('Name not defined')
  }

});


promise.then((result) => {

})

promise.catch((err) => {

})