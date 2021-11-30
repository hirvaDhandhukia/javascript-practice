// // getting elements form the button and the h1 tag
// var value = document.getElementById('num');
// const decrease = document.getElementById('decrease');
// const reset = document.getElementById('reset');
// const increase = document.getElementById('increase');

// let count = 0;

// // adding onclick event listner to the increase button
// increase.addEventListener("click", () => {
//     count++;
//     value.innerHTML = count;
// });

// generating all different functions is not efficient way to do this
// so i'm using a new variable with document.querySelectorAll
var value = document.getElementById('num');
const btns = document.querySelectorAll('.btn');
let count = 0;

// using a for loop here for iterating through all 3 btns
btns.forEach((btn) => {
    btn.addEventListener("click", (k) => {
        // using a JS event property called currentTarget
        const styles = k.currentTarget.classList;
        if(styles.contains("decrease")) {
            count --;
        } else if (styles.contains("increase")) {
            count ++;
        } else {
            count = 0;
        }

        if (count > 0) {
            value.style.color = "green";
        } else if (count < 0) {
            value.style.color = "red";
        } 
        else if (count == 0) {
            value.style.color = "#222";
        }

        value.textContent = count;
        // value.innerHTML = count;
    });
});