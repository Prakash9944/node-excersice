let arr = [1, 2, 3, 4]; // 2, 3, 4 => 24 // 3, 4, 1, => 12 // 4, 1, 2 => 8 // 1, 2, 3 => 6

let total = 1,
    res = [];

for (let i = 0; i < arr.length; i++) {
  total = total * arr[i]
}

console.log("total", total)

for (let i = 0; i < arr.length; i++) {
  res[i] = total / arr[i]
}

console.log(res)