// here i'm building a constant array that represents a mini database for my colors
const colors = ["#C0392B", "#27AE60", "#8E44AD", "#F39C12"];

// getting elements of h2.span (i.e. the color name) and button
var color = document.querySelector('.color');
var btn = document.getElementById('btn');

// implementing the onclick function for background sytle change
btn.addEventListener ("click", () => {
    // // getting a specific element of array initially
    // const newColor = 2;
    // console.log(colors[newColor]);
    // document.body.style.backgroundColor = colors[newColor];
    // color.innerHTML = colors[newColor];

    // i'm now generating a random indexes for the array
    const randomNum = getRandomNumber();

    document.body.style.backgroundColor = colors[randomNum];
    color.innerHTML = colors[randomNum];
});

function getRandomNumber () {
    // math floor function generates a floor value (an integer not a decimal)
    // math random function generates a random number between 0 to 1
    let gotTheNumber = Math.floor(Math.random()*colors.length);
    // if(gotTheNumber === index) {}
    return gotTheNumber;
}