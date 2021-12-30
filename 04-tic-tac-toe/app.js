// console.log("welcome to my first JS game");
let turn = "X";
let gameover = false;

const changeTurn = () => {
    return turn === "X"?"O" : "X";
}

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

