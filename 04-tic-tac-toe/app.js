// console.log("welcome to my first JS game");
let turn = "X";
const changeTurn = () => {
    return turn === "X"?"O" : "X";
}

const checkWin = () => {

};


// box pr click krenge to event-listner laga rahe hai for changing turns and all 
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    // jo box click ho wo box ke andar ka text muje change krna hai
    let boxText = element.querySelector(".boxText");
    element.addEventListener('click', ()=>{
        if(boxText.innerText === '') {
            boxText.innerText = turn;
            changeTurn();
            checkWin();

            document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
        }
    })
})