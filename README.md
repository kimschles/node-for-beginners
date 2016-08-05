## Node.js for Beginners
### _Develop Denver_ Talk by Ryan Ciecalone: 4 August 2016

#### Objectives
By the end of my 'Active Recall' session, I will be able to...

1. Identify and describe the benefits of using Node.js
1. Explain async (what's the work). Non blocking is a key word
1. Write a node program that will print 'Hello World'
1. Create and access node modules using ```require``` and ```module.exports```
1. Create a simple server using Node.js
1. Create read and serve an HTML file with a Node server
1. Describe the purpose of Express

##### Objective 1: Identify and describe the benefits of using Node.js
* Node is

##### Objective 3:  Write a node program that will print 'Hello World'

##### Objective 4:  Create and access node modules using ```require``` and ```module.exports```

1. Make a new directory 'make your own modules'
1. Two different files: loud-greeting, soft-greeting
1. In loud-greeting.js, create an object named loud, and add a key called ```sayHi``` and a value of 'Hello There!'```var loud = { sayHi: 'HELLO THERE!'}```

1. Repeat in the soft-greeting.js file
1. Add these to the build in module with ```module.exports = loud``` and ```module.exports = soft``` (if you want to examine the module, console.log it and run the loud-greeting.js file)
1. Create an app.js file
1. In the file, require my the soft-greeting and loud-greeting modules by declaring a variable, and assigning it the value the ```require``` function. Pass in the path the module as the paramter. (I made these modules, so the parameter is the the entire path. If it was a node module, just the name is required)
1. I can now access the loud and soft greeting objects, so grab the value by using dot notation ```soft.sayHi``` and ```loud.sayHi```
1. Use node to run app.js

#### Objective 5: Create a simple server using Node.js
1. Make a new directory called 'simple-server'
1. Create a new file called 'server.js'
1. In the server.js file, use ```require``` to access the build it http module ```var http = require('http')```
1. On the http object, invoke the .createServer method, and pass in a callback function with 2 parameters: request and response
1. Invoke the .writeHead method on the response, and pass in a status code (200), and a message
1. Invoke the .end method on the response, and pass in a message in the form of a string
1. On the create server function, invoke the .listen() method, and pass in the 2 parameters: the port #
