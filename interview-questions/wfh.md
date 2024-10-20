# 1. Map
    var array = [10, 20, 30]
    var maps = array.map((item) => {
      if (item > 20){
        return item
      }
    })
    console.log('maps', maps)

# 2.What print
    console.log(x)
    var x = 10;
    console.log(x)

# 3.Object De-structuring
    var obj = { a: 1, b: 2, c: 3 };
    var { a: first, ...rest } = obj;

# 4. Reduce Example
    var array = [1, 2, 3, 4, 5];
    var reduceResult = array.reduce((acc, current) => {
        console.log("acc", acc, "current", current)
        if (current % 2 ==  0) {
            return acc + current;
        } else {
            return acc;
        }
    }, 0);

    console.log("reduceResult", reduceResult);
    //  acc 0 and current 1  return 0
    //  acc 0 and current 2 condition Match 0 + 2 return 2
    //  acc 2 and current 3 condition not match return 2
    //  acc 2 and current 4 condition match return 2 + 4 = 6

# 5. Output

    var outer = function() {
        let count =0;

        return function inner () {
            count++
            console.log(count)
        }
    }

    const outers = outer()
    console.log("outers",outers)
    outers()
    outers()