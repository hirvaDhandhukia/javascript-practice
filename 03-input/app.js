var input = document.querySelector('input');
var error = document.querySelector('span');

// when keyup, update the error if it is <10 or not
input.addEventListener("keyup", function change() {
    // console.log("yooo");
    
    var ans = input.value;
    // if(ans.length > 10) {
    //     error.innerText = "input should be less than 10 letters";
    // } else if (ans.length <= 10) {
    //     error.innerText = "";
    // }

    if(ans.length > 10) {
        error.style.display = "block";
        error.style.color = "red";
        error.innerText = "input should be <10 letters";
    } else {
        error.style.display = "none";
    }
});