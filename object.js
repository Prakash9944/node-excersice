var accountId = '12345678';

var usages = {

    '123': {
        name: 'prakash',
        age: 25,
        sex: 'male',
        address: 'algeria'
    },

    '1234': {
        name: 'prakashraj',
        age: 34,
        sex: 'male',
        address: 'usa'
    },

    '12345': {
        name: 'raj',
        age: 24,
        sex: 'male',
        address: 'paris'
    },

    '123456': {
        name: 'pk',
        age: 28,
        sex: 'male',
        address: 'usa'
    },

    '1234567': {
        name: 'sk',
        age: 27,
        sex: 'male',
        address: 'trichy'
    },
    '12345678': {
        name: 'pr',
        age: 19,
        sex: 'female',
        address: 'delhi'
    }
}

usages[accountId].accounts = usages[accountId].accounts || {
        name: 'prakash',
        age: 29,
        sex: 'male',
        address: 'durgapoor'
    };

usages[accountId].accounts.sexss = usages[accountId].accounts.sexss || {dad: 'as'}

// usages[name].totalProject = usages[name].totalProjects || 1;
// usages[name].totalProject = usages[name].totalProject + 1;

console.log('asda', usages[accountId])