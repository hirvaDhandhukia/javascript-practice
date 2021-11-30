// getting elements form the button and the h1 tag
var value = document.getElementById('num');
const decrease = document.getElementById('decrease');
const reset = document.getElementById('reset');
const increase = document.getElementById('increase');

let count = 0;

// adding onclick event listner to the increase button
increase.addEventListener("click", () => {
    count++;
    value.innerHTML = count;
});
