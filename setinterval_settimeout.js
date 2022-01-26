function sayHello (pharse, who){
    console.log(pharse + ', '+who)
}

// setTimeout(sayHello, 1000, "hello", "prakashraj");


setInterval(sayHello, 1000, "hello", "prakashraj");