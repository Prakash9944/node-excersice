1. Header
2. Two coloum
3. side bar
4. main content
5. footer

<div  auto>
    header
</div>

<div flex>
    <div w>
        <drop>
    </div>

    <div>
        content
    </div>
</div>

<div auto>
    footer
</div>


class Stack {

    constructor() {
        this.arrayElement = []
    }
    push(element) {
        this.arrayElement.push(element)
    }

    pop() {
        let lastElement = this.arrayElement.pop()
        return lastElement;
    }

    shift() {
        let firstElement = this.arrayElement.shift()
        return firstElement
    }

}

var s = new Stack();
s.push([10, 11, 12])
s.pop()
s.shift()

var logMessage = function (req, res, next) {
    console.log("Debug: Incoming request url: ", req.originalUrl)
    console.log("Debug: Time: ", moment())

    next()
}

app.use(logMessage)

app.use(logMessage)



certain man celebration 28 wedding anerversy when they wife age is half age of this huspend where wife age 23