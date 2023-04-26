let gameover = false;
let audioturn = new Audio("./audio/ting.mp3");
let turn = "X";

// checking the turn
const changeTurn = () => {
    return turn === "X" ? "0": "X";
}


// function to check winner
const findWinner = () => {
    let box_text = document.getElementsByClassName('box-text');
    let wins = [
        [0,1,2, 0, 4.5, 0],
        [3,4,5, 0, 14.5, 0],
        [6,7,8, 0, 24, 0],
        [0,3,6, -10, 14, 90],
        [1,4,7, 0, 14, 90],
        [2,5,8, 10, 14, 90],
        [0,4,8, 0, 14.5, 45],
        [2,4,6, 0, 14.5, -45]
    ]
    wins.forEach(e => {
        console.log(wins);
        console.log(box_text[e[0]].innerText);
        console.log(box_text[e[1]].innerText);
        if((box_text[e[0]].innerText === box_text[e[1]].innerText) && (box_text[e[2]].innerText === box_text[e[1]].innerText) && (box_text[e[0]].innerText !== "")) {
            document.querySelector('.winner').innerText = `${box_text[e[0]].innerText} Won`;
            gameover = true;
            document.querySelector('.win-img').style.cssText = `
            visibility: visible;
            width: 60%;
            `
            document.querySelector('.line').style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector('.line').style.width = "95%";
        }
    })
}


// displaying the text 

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(elem => {
    let txt = elem.querySelector('.box-text');
    elem.addEventListener('click', () => {
        if(txt.innerText === ''){
            txt.innerText = turn;
            turn = changeTurn();
            audioturn.play();
            findWinner();
            if(!gameover){
                document.getElementsByClassName("info")[0].innerText = `Turn for ${turn}`;
            }
        }
    })
})




// button reset 
resets.addEventListener('click', () => {
    let boxText = document.getElementsByClassName('box-text');
    Array.from(boxText).forEach(elem => {
        elem.innerText = "";
    })
    turn = "X";
    gameover= false;
    document.getElementsByClassName("info")[0].innerText = `Turn for ${turn}`;
    document.querySelector('.winner').innerText = "";
    document.querySelector('.win-img').style.cssText = `
    visibility: hidden;
    width: 0;
    `
    document.querySelector('.line').style.width = "0";

})


function myfunction() {
    var elem = document.getElementById("nav-bar");
    elem.classList.toggle("mystyle");
    var elem1 = document.querySelector('.reset');
    elem1.classList.toggle("mystyle");

    var navbutton = document.querySelector('.change-color');
    navbutton.classList.toggle("nav-color");
}