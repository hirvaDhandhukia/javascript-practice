// function x() {
//     console.log("Hello");
// }

// // y is an higher order function here
// // and x is the callback function 
// function y(x) {
//     x();
// }


// let's take an array that has radius of 4 circles; and we have to calculate area of all these 4 circles
const radius = [1, 2, 3, 4];

// effective way to write the code
const area = function(radius) {
    return Math.PI * radius * radius;
}
const circumference = function(radius) {
    return 2 * Math.PI * radius;
}
const calculate = function (radius, logic) {
    const output = [];
    for(let i=0; i< radius.length; i++) {
        output.push(logic(radius[i]));
    }
    return output;
}
// console.log(calculate(radius, area));
// console.log(calculate(radius, circumference));


// polyfil for map function 
// console.log(radius.map(area));

Array.prototype.calculate2 = function (logic) {
    const output = [];
    for(let i=0; i< this.length; i++) {
        output.push(logic(this[i]));
    }
    return output;
}
console.log(radius.calculate2(area));

// // ineffective because of code-repeatation
// const calculateArea = function (radius) {
//     const output = [];
//     for(let i=0; i<radius.length; i++) {
//         output.push (Math.PI * radius[i] * radius[i]);
//     }
//     return output;
// }
// console.log(calculateArea(radius));

// const calculateCircumference = function (radius) {
//     const output = [];
//     for(let i=0; i<radius.length; i++) {
//         output.push (2 * Math.PI * radius[i]);
//     }
//     return output;
// }
// console.log(calculateCircumference(radius));