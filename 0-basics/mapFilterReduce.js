// // map
// const arr = [5, 1, 3, 2, 6];
// // I want to transform these 
// // Double - [10, 2, 6, 4, 12]
// // Triple - [15, 3, 9, 6, 18]
// // Binary - ["101", "1", "11", "10", "110"]

// const ans = function (arrEle) {
//     return 2*arrEle;
// }
// // const binary = function (arrEle) {
// //     return arrEle.toString(2);
// // }
// // console.log(arr.map(binary));

// console.log(arr.map((x) => {
//     return x.toString(2);
// }));

// // filter
// const arr = [5, 1, 3, 2, 6];

// // filter all odd values inside this array
// function isOdd(x) {
//     return x%2;
// }
// function isEven(x) {
//     return x%2 === 0;
// }
// function greaterThan4(x) {
//     return x>4;
// }
// const output = arr.filter(isOdd);
// console.log(output);

// reduce function
const arr = [5, 1, 3, 2, 6];
function findSum(arr) {
    let sum = 0;
    for(let i=0; i<arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(findSum(arr))

// the accumulator should be initialized with an initial value
// that is basically the second argument to the reduce function 
const output = arr.reduce(function(acc, curr) {
    acc = acc + curr;
    return acc;
}, 0);
console.log(output)

const maxEle = arr.reduce(function(max, curr) {
    if(curr > max) {
        max = curr;
    }
    return max;
}, 0);
console.log(maxEle);