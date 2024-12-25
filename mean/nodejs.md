1. what is nodejs

    # Answer:-
        1. Node.js is an open-source, cross-platform JavaScript runtime environment that allows developers to build web applications outside of a browser

        2. Node.js is used to create server-side web applications. It's popular for data-intensive applications because it uses an asynchronous, event-driven model.

        3.  Node.js runs the V8 JavaScript engine, which is the core of Google Chrome, outside of the browser.

2. What is the Event Loop in Node.js, and how does it work?

    # Answer:-
        1. The Event Loop is a core part of Node.js, allowing it to handle non-blocking I/O operations. It works on a single-threaded architecture to process asynchronous callbacks.

        2. The event loop is a mechanism that allows JavaScript to handle multiple operations simultaneously without creating new threads.

    # Phases in the Event Loop:-
        1. Timers: Executes setTimeout and setInterval callbacks.
        2. Pending Callbacks: Handles I/O callbacks like errors from operations.
        3. Idle, Prepare: Internal use.
        4. Poll: Retrieves new I/O events, executing their callbacks.
        5. Check: Executes setImmediate callbacks.
        6. Close Callbacks: Executes close events, e.g., socket.on('close')

3. what is Timers Phases?

    # Answer:-
        * This phase executes callbacks scheduled by setTimeout() and setInterval() when their timer expires.

        * Even though the timer is set to 0, the callback is queued and only executed in the Timers phase.

        * schedules a callback to be executed after a minimum delay. The event loop checks if the specified delay has passed, and if it has, the callback is executed during the Timers phase.

    # Example:-
        setTimeout(() => {
            console.log('Timer callback');
          }, 0);
          console.log('Program start');

4. what is Pending Callbacks Phases?

    # Answer:-
        1. The Pending Callbacks Phase mainly deals with I/O callbacks that are triggered by system-level operations like file reads, database queries, or network interactions. These callbacks are queued up and executed after the Timers phase but before the Poll phase to ensure efficient handling of system-level events.

        2. System-level operations include file reading, database queries, network calls (API requests), and any other I/O operation that requires interaction with external resources or the operating system.

    # Real-Time Example
        1. The file system callback will be deferred to the Pending Callbacks Phase, and once the file read is completed, it will log the file content.

        2. const fs = require('fs');
           console.log("Start");
           fs.readFile('example.txt', 'utf8', (err, data) => {
                if (err) throw err;
                console.log("File content:", data);
           });

           setTimeout(() => {
                console.log("This is a Timer with 1-second delay");
           }, 1000);
           console.log("End");

    # When Does the Pending Callbacks Phase Occur?
        1. If an I/O operation (like reading from a file) completes before the event loop moves on to the Poll Phase, its callback will be processed in the Pending Callbacks Phase.

    # What Happens in the Pending Callbacks Phase?
        1. I/O Callbacks that have been deferred by the system will be executed in this phase. These callbacks could be related to tasks like TCP connections, file system operations, or other system-level interactions.

        2. After the Timers phase executes any scheduled timers, any remaining pending I/O callbacks are executed during the Pending Callbacks Phase.

5. what is Idle, Prepare Phase in Node.js?

    # Answer:-
        1. This phase is used internally by Node.js and does not typically involve user code. It handles low-level operations that prepare the environment for the Poll phase

        2. This phase doesn’t execute any specific user-defined code like callbacks, setTimeout, setInterval, or fs.readFile. Instead, it’s responsible for maintaining the event loop's internal state and setting things up for the next phases.

    # What Happens in the Idle, Prepare Phase?
        1. The Idle, Prepare Phase is used internally for preparation and housekeeping before other event loop phases, such as the Poll Phase or Check Phase.

        2. In this phase, the event loop checks if it’s in an idle state or prepares for the next phase.(Let’s say you are running a Node.js server that performs some I/O operations (e.g., reading from a file, making an API call) and then processes results to send responses to clients. During this, the event loop handles various phases behind the scenes, and the Idle, Prepare Phase would be responsible for maintaining the loop’s readiness for the next phase, even though it's not directly interacting with your code.)

        3. Node.js can perform minor cleanup or state updates in this phase to ensure smooth operation.

        4. In real-time, the Idle, Prepare Phase helps to ensure that I/O operations, timers, and other callbacks execute in the correct sequence without delay or interruption, although it's not something you need to worry about as a developer.

6. what is Poll Phase in the Node.js Event Loop?

    # Answer:-
        1. The Poll Phase is a crucial part of the Node.js event loop. It’s responsible for processing I/O events (like file operations, network events, or database queries) and managing asynchronous callbacks related to those operations. The event loop waits for new events to arrive, processes them, and executes their callbacks in an efficient, non-blocking manner.

    # Example in Action:
        1. When a user sends an HTTP request to the Node.js server, the Poll Phase is responsible for receiving the request.

        2. It triggers the fs.readFile operation.

        3. Once the file is read, the Poll Phase processes the callback and sends the content back to the client.

        4. If there are no more requests or I/O events, the Poll Phase remains idle, waiting for new events to process.


7. what is check Phase in the Node.js Event Loop?

    # Answer:-
        1. Any callbacks that were scheduled using the setImmediate() function are executed during the Check Phase. These callbacks are intended to run immediately after the current event loop cycle and before any timers.

        2. Callbacks scheduled using setImmediate() are executed before any timers (such as those scheduled with setTimeout() or setInterval()), even if their delay time has expired.

        3. The setImmediate() function is called, which schedules a callback to be executed in the Check Phase of the event loop. However, this callback will only run after the current phase of the event loop finishes (and after the Poll Phase).

        4. The Check Phase is crucial for executing callbacks scheduled by setImmediate(). It allows you to schedule a function to run after the current phase of the event loop finishes but before timers are processed, ensuring efficient handling of tasks that should run immediately after I/O operations.

    # Order of Execution in Event Loop:-
        1. Poll Phase (checks for I/O events, but in this case, there are no I/O operations):
            * The Poll Phase completes its work (since there's nothing to process).

        2. Check Phase (executes setImmediate() callbacks):
            * The callback scheduled by setImmediate() is now executed, so the output is: Immediate callback executed.

        2. Timers Phase (executes setTimeout() callbacks):
            * Finally, the callback from setTimeout() is executed, so the output is: Timeout callback executed.

8. what is Close Callbacks Phase?

    # Answer:-
        1.

9. How would you handle errors in a Node.js application?

    # Answer:-
        1. Synchronous Code: Use try-catch blocks.
            try {
                // code
            } catch (error) {
                console.error(error);
            }

        2. Asynchronous Code: Handle errors in callbacks.
            fs.readFile('file.txt', (err, data) => {
                if (err) {
                    console.error(err);
                    return;
                }
                console.log(data);
            });
10. Global Error Handling

    # Answer:-
        1. Error Handling Middleware (Express Applications):-
            * In Express, you can define a custom error-handling middle-ware function. It is invoked whenever next(err) is called with an error object.

                app.use((err, req, res, next) => {
                    console.error(err.stack); // Log the error
                    res.status(err.status || 500).json({
                        message: err.message || "Internal Server Error",
                    });
                });

        2. Unhandled Promise Rejections:-
            * If a promise is rejected but not handled, Node.js emits an unhandledRejection event. You can listen for this event and handle it globally.

                process.on('unhandledRejection', (reason, promise) => {
                    console.error('Unhandled Rejection:', reason);
                    // Optionally, exit the process:
                    process.exit(1);
                });

    # Why Use Global Error Handling?
        1. Centralized Error Management:
            Simplifies debugging and maintenance by managing all errors in one place.
        2. Consistent Response:
            Ensures clients receive uniform error messages.
        3. Enhanced Stability:
            Catches unexpected errors and prevents crashes by handling them gracefully.
        4. Improved Logging:
            Logs critical errors for later debugging and monitoring.

11. What are streams in Node.js?

    # Answer:
        1. Streams are objects in Node.js that enable reading and writing data continuously in chunks rather than loading the entire data into memory.

    # Advantages:-
        1. Memory Efficiency: Process large data without loading it entirely into memory.
        2. Time Efficiency: Start processing data as soon as chunks are available.
        3. Powerful Chaining: Pipe streams together to perform multiple operations.

    # Types of Streams:
        1. Readable:
            Data can be read, e.g., fs.createReadStream().
        2. Writable:
            Data can be written, e.g., fs.createWriteStream().
        3. Duplex:
            Both readable and writable, e.g., network sockets.
        4. Transform:
            Can modify or transform data while reading/writing, e.g., zlib.createGzip().

        const fs = require('fs');
        const readStream = fs.createReadStream('input.txt');
        const writeStream = fs.createWriteStream('output.txt');
        readStream.pipe(writeStream);

        1. Writable: streams to which we can write data. For example, fs.createWriteStream() lets us write data to a file using streams.

        2. Readable: streams from which data can be read. For example: fs.createReadStream() lets us read the contents of a file.

        3. Duplex: streams that are both Readable and Writable. For example, net.Socket

        4. Transform: streams that can modify or transform the data as it is written and read. For example, in the instance of file-compression, you can write compressed data and read decompressed data to and from a file.

12. How would you scale a Node.js application?

    # Answer:-
        1. Clustering: Use the cluster module to fork the process and utilize multiple CPU cores.
        2. Load Balancing: Use a reverse proxy like NGINX or cloud services to distribute traffic across
        3. Micro-services: Break the application into smaller, independent services.
        4. Use Caching: Implement caching with Redis or Memcached for frequently accessed data.
        5. Horizontal Scaling: Use container orchestration tools like Docker and Kubernetes for deploying multiple instances.

13. What is middleware in Express.js, and how does it work?

    # Answer:-
        1. Execute any code.
        2. Modify the req or res objects.
        3. End the request-response cycle.
        4. Call the next middleware in the stack.
        5. Error-handling: Define with four arguments, (err, req, res, next)

            app.use((req, res, next) => {
                console.log('Middleware executed');
                next(); // Pass control to the next middleware
            });

14. Explain how you handle file uploads in Node.js?

    # Answer:-
        const multer = require('multer');
        const upload = multer({ dest: 'uploads/' });
        app.post('/upload', upload.single('file'), (req, res) => {
            res.send('File uploaded successfully');
        });

15. What is the purpose of process.nextTick() in Node.js?

    # Answer:-
        1. Process.nextTick() defers the execution of a callback function until the next iteration of the Event Loop, prioritizing it over setTimeout or setImmediate.

        process.nextTick(() => console.log('Executed in next tick'));
        console.log('Executed first');

16. What is the difference between setImmediate() and process.nextTick()?

    # Answer:-
        1. setImmediate(): Executes the callback on the next iteration of the event loop in the check phase.
        2. process.nextTick(): Executes the callback immediately after the current operation completes, before the event loop continues.

        setImmediate(() => console.log('setImmediate'));
        process.nextTick(() => console.log('nextTick'));
        console.log('sync code');

        # Output:-
            sync code
            nextTick
            setImmediate

17. What are Worker Threads in Node.js, and when would you use them?

    # Answer:-
        1. Worker Threads allow Node.js to run JavaScript code in multiple threads for CPU-intensive tasks, overcoming the single-threaded nature of Node.js.
        2. For CPU-bound operations like image processing, data compression, or complex calculations.

        const { Worker } = require('worker_threads');
        const worker = new Worker(`
            const { parentPort } = require('worker_threads');
            let result = 0;
            for (let i = 0; i < 1e9; i++) result += i;
            parentPort.postMessage(result);
        `, { eval: true });

        worker.on('message', result => console.log(`Result: ${result}`));

18. What is the difference between req.params, req.query, and req.body in Express?

    # Answer:-
    Property                Description                                  Example
    ============================================================================
    req.params              Parameters in the URL path.                  /user/:id → req.params.id
    req.query               Query string parameters in the URL.          /user?id=123 → req.query.id
    req.body                Data sent in the request body (POST).        JSON payload: req.body.name (requires parsing)

19. How would you secure a Node.js application?

    # Answer:-
        1. Use HTTPS: Encrypt data in transit.
        2. Sanitize Inputs: Use libraries like validator or DOMPurify to prevent XSS or SQL injection.
        3. Secure Headers: Use helmet middleware in Express.
            const helmet = require('helmet');
            app.use(helmet());
        4. Authentication and Authorization: Implement JWT or OAuth for secure user sessions.
        5. Environment Variables: Store sensitive data like API keys in .env files.

20. What is NPM?

    # Answer:-
        1. NPM stands for Node Package Manager, responsible for managing all the packages and modules for Node.js.

21. What is an EventEmitter in Node.js?

    # Answer:-
        1. EventEmitter is a class that holds all the objects that can emit events
        2. Whenever an object from the EventEmitter class throws an event, all attached functions are called upon synchronously
        3. EventEmitter provides multiple properties like on and emit. on property is used to bind a function with the event and emit is used to fire an event.
        4. emitter.on(eventName, callback): Used to register a listener for an event.
        5. emitter.emit(eventName, [...args]): Used to emit an event, triggering the execution of all registered listeners.

        const EventEmitter = require('events');
        const myEmitter = new EventEmitter();

        myEmitter.on('greet', () => {
            console.log('Hello, World!');
        });
        myEmitter.emit('greet');

        # EventEmitter in Practical Use:-

            const fs = require('fs');
            const readStream = fs.createReadStream('file.txt');

            // Listen for the 'data' event to read chunks of data
            readStream.on('data', (chunk) => {
              console.log('Received chunk:', chunk);
            });

            // Listen for the 'end' event when the file is fully read
            readStream.on('end', () => {
              console.log('File reading completed.');
            });

22. What are the two types of API functions in Node.js?

    # Answer:- The two types of API functions in Node.js are:
    1. Asynchronous, non-blocking functions
        # Answer:-
            1. Asynchronous functions in Node.js execute tasks in a non-blocking manner, allowing the event loop to continue processing other tasks while waiting for a function to complete.
            2. Ideal for I/O tasks such as reading files, network requests, or database queries.

            const fs = require('fs');
            // Asynchronous file read
            fs.readFile('file.txt', 'utf8', (err, data) => {
                if (err) {
                    console.error('Error reading file:', err);
                } else {
                    console.log(data); // Output: Content of file.txt
                }
            });
            console.log('File read initiated'); // This will be logged before the file content due to async behavior

    2. Synchronous, blocking functions
        # Answer:-
            1. Synchronous functions in Node.js execute tasks in a blocking manner. This means that the function will not return control to the event loop until it has finished executing its operation. This can cause performance bottlenecks if not used carefully
            2. fs.readFileSync() reads the file content synchronously. The program waits for the file to be read before moving to the next statement.
            3. Ideal for small or non-I/O intensive tasks.

            const fs = require('fs');
            // Synchronous file read
            try {
                const data = fs.readFileSync('file.txt', 'utf8');
                console.log(data); // Output: Content of file.txt
            } catch (err) {
                console.error('Error reading file:', err);
            }

    3. When to Use Each:-
        # Answer:-
            1. Use synchronous functions when the operation is quick and does not involve I/O or when you need to ensure that the task completes before proceeding.

            2. Use asynchronous functions for I/O operations, networking, or tasks that may take a long time to avoid blocking the event loop and to improve performance in high-concurrency environments.

23. what are the NodeJs Modules?

    # Answer:-
        * NPM, * GLOBALS, * CALLBACKS, * EVENT, * HTTP

24. SetInterval and SetTimeOut differences

    # Answer:-
        1. setTimeout allows us to run a function once after the interval of time.
        2. setInterval allows us to run a function repeatedly, starting after the interval of time, then repeating continuously at that interval

25. what is callback function?

    # Answer:-
        1. a function passed into another parameter called callback function
        2. callback is a function called at the completion of a given task; this prevents any blocking
        3. This allows for asynchronous behavior, where the callback function is invoked after some operation
        4. Asynchronous Nature: Callbacks are commonly used in asynchronous operations (e.g., setTimeout, I/O operations).

    # Callback with Asynchronous Operations:-
        // Simulate an asynchronous task with setTimeout
        function fetchData(callback) {
            console.log('Fetching data...');
            setTimeout(() => {
                console.log('Data fetched!');
                callback();  // Once data is fetched, call the callback function
            }, 2000);
        }

        // Callback function to be called after data is fetched
        function processData() {
            console.log('Processing data...');
        }

        // Call fetchData with processData as the callback
        fetchData(processData);

26. what is promise function?

    # Answer:-
        1. promise is an object that may produce a single value some time in the future: either a resolved value, or a reason that it's not resolved
            * fulfilled rejected, or pending

    # Solutions to Callback Hell:-
        1. Promises: Promises provide a more readable way to handle asynchronous code, avoiding the deep nesting of callbacks.
        2. Async/Await: Introduced in ECMAScript 2017, async/await allows asynchronous code to be written in a more synchronous style, improving readability.

27. what is async/await?

    # Answer:-
        1. Node to deal with Promises and function chaining.
        2. async and await are keywords in JavaScript that simplify working with asynchronous code, making it look and behave more like synchronous code.

28. what is arrow function

    # Answer:-
        1. If there’s only one argument, then the parentheses are not required either:
            let squareNum = x => x * x;

        2. What if there are no arguments?
            let sayHi = _ => console.log(“Hi”);

        3. Arrow functions are only callable and not constructable, i.e arrow functions can never be used as constructor functions.

29. what is hosting?

    # Answer:-
        1. Hoisting works well with other data types and variables. The variables can be initialized and used before they are declared.

        2. JavaScript only hoists declarations, not initialization. If a variable is declared and initialized after using it, the value will be undefined

        3. Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function).

        4. js identifies the variable not initialization

            #1 Arrow function are not hosted

            #2 Arrow function not need function declaration keyword

            #3 In Arrow function this keyword binded to parent object

            #4 Arrow function does not have new keyword and its not constructble

30. what is constructor function javaScript?

    # Answer:-
        constructor is a function that creates an instance of a class which is typically called an “object”. In JavaScript

31. what is http Get?

    # Answer:-
        Retrieve data from a server without modifying it.

32. what is pipe in nodejs?

    # Answer:-
        Node.js, pipe is a method provided by the Stream module that connects a readable stream to a writable stream. This allows data to flow seamlessly between the two streams, making it a powerful way to handle streaming data operations such as reading from a file and writing to another file, or processing data in real-time.

        1. File Operations: To efficiently transfer large files or streams without loading them entirely into memory.

        2. Data Transformation: For transforming data streams, like compression or encryption, as data is being transferred.

        3. Network Requests: When receiving data from one HTTP request and sending it to another service, such as piping data from an HTTP request to a file or another HTTP response.

33. what is function declaration and expression?

    # Answer:-
        1. In JavaScript, function declaration and function expression are two ways of defining functions. They differ in syntax

    # Function Declaration:-
        1. Function declaration defines a function using the function keyword. It is hoisted, meaning it can be called before its definition in the code.

        Example:-
            console.log(add(2, 3)); // Works because of hoisting
            function add(a, b) {
                return a + b;
            }

        2. Hoisted: Function declarations are moved to the top of their scope, so they can be invoked before they appear in the code.
        3. Can exist standalone, without being assigned to a variable.

    # Function Expression:-
        1. function expression defines a function and assigns it to a variable. It is not hoisted, meaning it cannot be used before its definition.

        Example:-
            console.log(subtract(5, 2)); // Error: subtract is not defined
            const subtract = function (a, b) {
                return a - b;
            };
            console.log(subtract(5, 2)); // Works: 3

        2. Not Hoisted: Function expressions are not available until the code execution reaches them.
        3. Useful for creating anonymous functions, which are functions without a name.

34. What is fork in nodejs?

    # Answer:-
        1. In Node.js, fork refers to a method used to create child processes. The concept is available through the child_process module

        2. fork() method spawns a new Node.js process (a child process) and establishes a communication channel between the parent and child processes. This makes it a specialized way to create child processes that can run separate tasks but still communicate via messaging.

    # When Do You Need fork?

        1. Heavy Computations:-
            1. Node.js is single-threaded, so heavy computations can block the event loop. Offloading such tasks to a child process using fork helps keep the main thread responsive.

        2. Parallel Processing:
            2. If you need to run multiple tasks concurrently, you can use fork() to create multiple processes.

        3. Worker Processes:
            3. For implementing worker threads or distributing tasks across processes (e.g., CPU-intensive tasks like image processing or video encoding).

        4. Isolation:-
            4. When you want to isolate a particular task or script, a separate process ensures that it doesn’t affect the main application.

        5. CPU-intensive tasks like data processing or file parsing.

        6. Offloading tasks to avoid blocking the main event loop.

        7. Running a separate Node.js script in parallel to the main application.

        const { fork } = require('child_process');

        // Parent process
        console.log('Parent process started');

        const child = fork('child.js'); // Specify the script for the child process

        // Send a message to the child
        child.send({ hello: 'world' });

        // Listen for messages from the child
        child.on('message', (msg) => {
            console.log('Message from child:', msg);
        });

        // Child process script (child.js)
        process.on('message', (msg) => {
            console.log('Message from parent:', msg);
            // Reply to the parent process
            process.send({ reply: 'Hello from child!' });
        });
