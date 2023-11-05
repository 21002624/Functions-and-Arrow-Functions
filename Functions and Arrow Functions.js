// Basic function declaration
function add(a, b) {
    return a + b;
}

// Function with default values
function greet(name = 'Guest') {
    console.log(`Hello, ${name}!`);
}

// Function with a rest parameter
function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}

// Basic function expression
const multiply = function (x, y) {
    return x * y;
};

// Function expression with default values
const welcome = function (user = 'Guest') {
    console.log(`Welcome, ${user}!`);
};


// Basic arrow function
const subtract = (a, b) => a - b;

// Arrow function with default values
const farewell = (user = 'Guest') => {
    console.log(`Goodbye, ${user}!`);
};

// Arrow function with implicit return
const square = x => x * x;

// Arrow function with multiple parameters
const fullName = (firstName, lastName) => `${firstName} ${lastName}`;

// Arrow function with rest parameter
const product = (...numbers) => numbers.reduce((acc, num) => acc * num, 1);

// Function with a callback
function fetchData(url, callback) {
    // Simulating an asynchronous operation
    setTimeout(() => {
        const data = { name: 'John', age: 25 };
        callback(data);
    }, 1000);
}


// Function returning a Promise
function fetchDataWithPromise(url) {
    return new Promise((resolve, reject) => {
        // Simulating an asynchronous operation
        setTimeout(() => {
            const data = { name: 'Jane', age: 30 };
            resolve(data);
        }, 1000);
    });
}
