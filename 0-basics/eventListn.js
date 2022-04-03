// click handler


// using closure 
function attachEventListners() {
    document.getElementById("clickMe")
    .addEventListener("click", function xyz() {
        console.log("You clicked btn", ++count)
    })
    let count = 0;
}

attachEventListners();

