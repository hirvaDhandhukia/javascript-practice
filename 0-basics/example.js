const users = [
    { firstName: "hirva", lastName: "dhandhukia", age: 26 },
    { firstName: "harsh", lastName: "prajapati", age: 75 },
    { firstName: "mahek", lastName: "upadhyay", age: 50 },
    { firstName: "elon", lastName: "musk", age: 26 },
];

// // list of fullNames
// // ["hirva dhandhukia", "harsh prajapati", ....]
// const output = users.map(x => 
//     x.firstName + " " + x.lastName
// )
// console.log(output)


// how many users have a particular age
// acc = {26: 2, 75: 1, 50: 1}
// we are keeping acc's initial value as empty object {}
// const output = users.reduce(function(acc, curr) {
//     if(acc[curr.age]) {
//         acc[curr.age] = ++acc[curr.age]
//     } else {
//         acc[curr.age] = 1;
//     }

//     return acc;
// }, {})
// console.log(output)

// list all the firstName of people whose age is < 30
// ["hirva", "elon"]
const output = users.filter(function(x) {
    return x.age < 30;
}).map((x)=> x.firstName);
console.log(output)

// using reduce for the same example
const reduceOutput = users.reduce(function(acc, curr) {
    if(curr.age < 30) {
        acc.push(curr.firstName)
    }
    return acc;
}, []);
console.log (reduceOutput)