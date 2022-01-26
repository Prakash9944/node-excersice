function palindrome(str) {
    console.log('str', str)
    var len = str.length;
    var mid = Math.floor(len/2);
    console.log('mid', mid)
    for ( var i = 0; i < mid; i++ ) {
        console.log(str[i] , str[len - 1 - i])
        if (str[i] !== str[len - 1 - i]) {
            console.log('asdsa')
            return false;
        }
    }

    return true;
}

var data = palindrome('madams');
console.log('data', data)