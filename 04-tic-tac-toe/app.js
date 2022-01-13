// console.log("welcome to my first JS game");
let turn = "X";
let gameover = false;

// changing turns
// if current turn is 'X' then change turn to 'O' else change turn to 'X'
const changeTurn = () => {
    return turn === "X" ? "O":"X";
}

// build an array that defines all conditions of win.
// we are iterating with forEach loop with a passed value 'e' 
// 'e' here is the position on each array i.e. 0,1 or2 (wins.forEach(e => {}))
// e[0] or e[1] etc here represents the value of 'X' or 'O'
const checkWin = () => {
    let boxText = document.getElementsByClassName('boxText');
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    wins.forEach(e => {
        if((boxText[e[0]].innerText === boxText[e[1]].innerText) && (boxText[e[1]].innerText === boxText[e[2]].innerText) && (boxText[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxText[e[0]].innerText + " Won";
            
            gameover = true;
        }
    })
};


// box pr click krenge to event-listner laga rahe hai for changing turns and all 
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    // jo box click ho wo box ke andar ka text muje change krna hai
    // and wo box ka innerText change krne ke baad i have to change the turn 
    // also i need to check if the 'win' condition is true or not
    let boxText = element.querySelector(".boxText");
    element.addEventListener('click', ()=>{
        if(boxText.innerText === '') {
            boxText.innerText = turn;
            turn = changeTurn();
            checkWin();

            if(!gameover) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    })
})

// add onclick event listner to reset button
let reset = document.getElementById("reset");
reset.addEventListener('click', ()=> {
    // console.log("reset the game");
    // change all element.innerText to empty
    let boxText = document.querySelectorAll(".boxText");
    Array.from(boxText).forEach(element => {{
        element.innerText = "";
    }});
    turn = "X";
    gameover = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
})