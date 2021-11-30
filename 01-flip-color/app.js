// here i'm building a constant array that represents a mini database for my colors
const colors = ["red", "green", "#8E44AD", "#F39C12"];

// getting elements of h2.span (i.e. the color name) and button
var color = document.querySelector('.color');
var btn = document.getElementById('btn');

// implementing the onclick function for background sytle change
btn.addEventListener ("click", () => {
    // getting a specific element of array initially
    const newColor = 2;
    console.log(colors[newColor]);
    document.body.style.backgroundColor = colors[newColor];
    color.innerHTML = colors[newColor];
});