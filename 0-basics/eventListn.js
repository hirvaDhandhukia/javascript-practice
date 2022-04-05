// // click handler

// // using closure 
// function attachEventListners() {
//     document.getElementById("clickMe")
//     .addEventListener("click", function xyz() {
//         console.log("You clicked btn", ++count)
//     })
//     let count = 0;
// }

// attachEventListners();




// blocking the main thread (setTimeout issues)
console.log("Start");

function cb() {
    console.log("Callback function executed");
}
setTimeout(cb,0);

// setTimeout(function cb() {
//     console.log("Callback function executed");
// }, 5000);

console.log("End");

// // million
// let startDate = new Date().getTime();
// let endDate = startDate;
// while(endDate < startDate + 10000) {
//     endDate = new Date().getTime();
// }

// console.log("while loop expires");