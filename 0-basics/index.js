// import "./styles.css";


// Hoisting in JS
// getName();
// console.log(x);

// getName();
// console.log(getName);

// var x = 7;

// var getName = () => {
//   console.log("Hirva Dhandhukia");
// }



// functions
// var x=1;
// a(); 
// b();
// console.log(x);

// function a() {
//     var x = 10;
//     console.log(x);
// }
// function b() {
//     var x = 100;
//     console.log(x);
// }

// Lexical Environment
// function a() {
//     var b=10;
//     c();
//     function c() {
//         console.log(b);
//     }
// }
// a();

// // temporal dead zone in let & const
// let a=10;
// console.log(a);

// var b=100;

// block scope
// shadoweing
// let b = 100;
// {
//     // Compound Statement
//     var a=10;
//     let b=20;
//     const c=30;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// console.log(b);

// // closures
// function x() {
//     var a =7;
//     return function y() {
//         var b=9;
//         console.log(a);
//     }
// }
// var z = x(); // z has the value of closure of the function y
// console.log(z); // will return whole function y
// // ....
// z(); // will return closure of y

// // closure to next level
// function z() {
//     var b = 22;
//     function x() {
//         var a =7;
//         function y() {
//             // var b=9;
//             console.log(a,b);
//         }
//         y();
//     }
//     x();
// }

// z();

// // call, apply and bind
// let name = {
//     firstname: "Hirva",
//     lastname: "Dhandhukia",
// }

// let printFullName = function (Hometown, State) {
//     console.log(this.firstname + " " + this.lastname + " from " + Hometown + ", " + State);
// }

// // printFullName.call(name, "Ahmedabad");

// let name2 = {
//     firstname: "Harsh",
//     lastname: "Prajapati",   
// }
// // funciton borrowing
// // printFullName.call(name2);


// // apply method
// printFullName.call(name, "Ahmedabad", "Gujarat");
// printFullName.apply(name2, ["Mumbai", "Maharashtra"]);

// // bind
// // this will create a copy of 'printFullName' and it will bind that to name2 object and will return a function
// let printMyName = printFullName.bind(name2, "Mumbai", "Maharashtra");
// console.log(printMyName);
// printMyName();


// // function currying
// by bind method && closure
// let multiply = function(x, y) {
//     console.log(x*y);
// }

// let multiply = function (x) {
//     return function (y) {
//         console.log(x*y);
//     }
// } 

// let multiplyByTwo = multiply(2);
// console.log(multiplyByTwo);
// multiplyByTwo(5);

// // let multiplyByThree = multiply.bind(this, 3);
// // multiplyByThree(5);



// setTimeout using closures 
// this will print the value of i after 1 second
// function x() {
//     var i = 1;
//     for (var i=1; i<=5; i++) {
//         // making a closure
//         function close(x) {
//             setTimeout(function () {
//                 console.log(x);
//             }, x*1000);
//         }
//         close(i);
//     }
//     console.log("Hirva says Hello to world")
// }
// x();


// // practice
// function outest() {
//     var c=20;
//     function outer(b) {
//         function inner() {
//             console.log(a, b, c);
//         }
//         let a = 10;
//         return inner;
//     }
//     return outer;
// }

// // outer()();
// var close = outest()("hirva");
// close();

// // data privacy using closures
// function counter() {
//     var count = 0;
//     return function incrementCounter() {
//         count++;
//         console.log(count);
//     }
// }
// var counter1 = counter();
// counter1()
// counter1()

// var counter2 = counter();
// counter2();



// // creating constructor function
// function Counter() {
//     var count = 0;
//     this.incrementCounter = function() {
//         count++;
//         console.log(count);
//     }
//     this.decrementCounter = function() {
//         count--;
//         console.log(count);
//     }
// }

// var counter1 = new Counter();

// counter1.incrementCounter();
// counter1.incrementCounter();
// counter1.decrementCounter();


// // function statement or function declaration
// function a() {
//     console.log("a called");
// }
// a();

// // function expression
// var b = function() {
//     console.log("b called");
// }
// b();

// // anonymous funcitons
// // function () {
// // }

// // named function expression
// var c = function x() {
//     console.log("c called");
// }
// c();
// // x(); // this is incorrect


// first class functions 
// we can pass functions inside another functions as an arguments
// functions are treated as values in JS
// const d = function(param1) {
//     return function xyz() {}
// }
// // d(function() {
// //     console.log("Hello from Hirva");
// // })
// console.log(d());


// Callback Function in JS
// this 'y()' here is the callback function
// setTimeout(function() {
//     console.log("timer")
// }, 5000);
// function x(y) {
//     console.log("x");
//     y();
// }
// x(function y() {
//     console.log("y");
// })
