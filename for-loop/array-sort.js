var array = [1, 7, 2, 8, 3, 4, 5, 0, 9];
for (var i = 1; i < array.length; i++){
    for (var j = 0; j < i; j++){
        if (array[i] < array[j]) {
            var x = array[i];
            array[i] = array[j];
            array[j] = x;
        }
    }
}

console.log("Sorting Order...", array);