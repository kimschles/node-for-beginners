## Node.js for Beginners
### Adapted from a _Develop Denver_ Talk by Ryan Ciecalone: 4 August 2016

#### Objectives
By the end of my 'Active Recall' session, I will be able to...

1. Identify and describe the benefits of Node.js
1. Write a node program that logs 'Hello World!' to the console
1. Create and access node modules using ```require``` and ```module.exports```
1. Create a simple server using Node.js
1. Serve an HTML file using a Node server

##### Objective 1: Identify and describe the benefits of using Node.js
* You can write server-side code in JavaScript! No need to learn a new language.
* Good for real time apps that need a persistent connection between the client and server
* Node works with multiple platforms: ios, Linux, and Windows
* It is free and open-source:
  * There are lots of online tutorials
  * Excellent documentation
  * You can access an online community that will answer your questions
* Node.js is fast, scalable, and asynchronous  
  * Node is asynchronous meaning that multiple functions can work at one time. (it's not that simple... the pizza delivery analogy is good)
    * When code is blocking, it means that a function must run to completion before another one can be invoked
    * When code is non-blocking, it means that multiple functions can run simultaneously     

##### Objective 2:  Write a node program that will print 'Hello World'
1. Download Node from [nodejs.org](https://nodejs.org/en/download/), or install using Brew with [these](https://changelog.com/install-node-js-with-homebrew-on-os-x/) instructions
1. Create a file called 'hello.js'
1. Write the 'Hello World!' code. For extra fun, use a setTimeout
3. Run the hello.js file in your command line: ```node hello.js```

##### Objective 3:  Create and access node modules using ```module.exports``` and ```require```

1. Make a new directory 'make your own modules'
1. Two different files: loud-greeting, soft-greeting
1. In loud-greeting.js, create an object named loud, and add a key called ```sayHi``` and a value of 'Hello There!'```var loud = { sayHi: 'HELLO THERE!'}```

1. Repeat in the soft-greeting.js file
1. Add these to the build in module with ```module.exports = loud``` and ```module.exports = soft``` (if you want to examine the module, console.log it and run the loud-greeting.js file)
1. Create an app.js file
1. In the file, require my the soft-greeting and loud-greeting modules by declaring a variable, and assigning it the value the ```require``` function. Pass in the path the module as the paramter. (I made these modules, so the parameter is the the entire path. If it was a node module, just the name is required)
1. I can now access the loud and soft greeting objects, so grab the value by using dot notation ```soft.sayHi``` and ```loud.sayHi```
1. Use node to run app.js

#### Objective 4: Create a simple server using Node.js
1. Make a new directory called 'simple-server'
1. Create a new file called 'server.js'
1. In the server.js file, use ```require``` to access the build it http module ```var http = require('http')```
1. On the http object, invoke the .createServer method, and pass in a callback function with 2 parameters: request and response
1. Invoke the .writeHead method on the response, and pass in a status code (200), and a message
1. Invoke the .end method on the response, and pass in a message in the form of a string
1. On the create server function, invoke the .listen() method, and pass in the 2 parameters: the port #
