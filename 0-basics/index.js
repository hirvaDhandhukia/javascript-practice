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

// closure to next level
function z() {
    var b = 22;
    function x() {
        var a =7;
        function y() {
            // var b=9;
            console.log(a,b);
        }
        y();
    }
    x();
}

z();