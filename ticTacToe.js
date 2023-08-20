let playerText = document.querySelector("#playerText");
let restartBtn = document.getElementById("restartBtn");
let gameBoard = document.getElementById("gameBoard");
let X_target = document.querySelector(".X_target");
let O_target = document.querySelector(".O_target");
let continer = document.querySelector(".continer");
let o_cpu = document.querySelector(".o_cpu")
let box = document.querySelector("#box")
let boxesArray = Array.from(document.getElementsByClassName("box"));
let player = "X";
let endPlaying = false;

let eleCpu;
X_target.innerHTML = O_target.innerHTML = 0;


// Get Id TO know The System Play ( PlayWithFriend || PlayWithMe || PlayWithCPU )

const urlParams = new URLSearchParams(window.location.search);
const idValueFromIntroPage = urlParams.get('id');

console.log(idValueFromIntroPage);

if (idValueFromIntroPage === 'PlayWithCPU') {
    o_cpu.innerHTML = `CPU(O)`;
}

function Game(id) {

    let ele = document.getElementById(id);

    //Play With Friend Button

    if (idValueFromIntroPage === 'PlayWithFriend') {

        if (endPlaying === false) {

            if (ele.innerHTML === "" && player === "X") {
                clickEffect.play();
                ele.innerHTML = "X";
                checkWinner();
                player = "O";
                playerText.innerHTML = "O";
            }

            else if (ele.innerHTML === "" && player === "O") {
                clickEffect.play();
                ele.innerHTML = "O";
                checkWinner();
                player = "X";
                playerText.innerHTML = "X";
            }
        } else if (endPlaying === true) { }
    }

    //Play With Me Button

    if (idValueFromIntroPage === 'PlayWithMe') {

        if (endPlaying === false) {

            if (ele.innerHTML === "" && player === "X") {
                clickEffect.play();
                ele.innerHTML = "X";
                checkWinner();
                player = "O";
                playerText.innerHTML = "O";

                if (endPlaying === false) {
                    arrayOfBoxes()

                    if (eleCpu.innerHTML === "") {
                        setTimeout(() => {
                            clickEffect.play();
                            eleCpu.innerHTML = "O";
                            checkWinner();
                            player = "X";
                            playerText.innerHTML = "X";
                        }, 500);
                    }
                }
            }
        } else if (endPlaying === true) { }
    }

    //Play With CPU Button

    if (idValueFromIntroPage === 'PlayWithCPU') {

        if (endPlaying === false) {

            if (ele.innerHTML === "" && player === "X") {
                clickEffect.play();
                ele.innerHTML = "X";
                checkWinner();
                player = "O";
                playerText.innerHTML = "O";

                if (endPlaying === false) {
                    findTheEle()
                    if (eleCpu.innerHTML === "") {
                        setTimeout(() => {
                            clickEffect.play();
                            eleCpu.innerHTML = "O";
                            checkWinner();
                            player = "X";
                            playerText.innerHTML = "X";
                        }, 500);
                    }
                }
            }

        } else if (endPlaying === true) { }
    }
}

function checkWinner() {

    let win = [];
    for (let i = 0; i < 9; i++) {
        win[i] = boxesArray[i].innerHTML;
    }

    if (win[0] === win[1] && win[1] === win[2] && win[2] !== "") {
        stopPlay();
    }
    else if (win[3] === win[4] && win[4] === win[5] && win[5] !== "") {
        stopPlay()
    }
    else if (win[6] === win[7] && win[7] === win[8] && win[8] !== "") {
        stopPlay()
    }
    else if (win[0] === win[3] && win[3] === win[6] && win[6] !== "") {
        stopPlay()
    }
    else if (win[1] === win[4] && win[4] === win[7] && win[7] !== "") {
        stopPlay()
    }
    else if (win[2] === win[5] && win[5] === win[8] && win[8] !== "") {
        stopPlay()
    }
    else if (win[0] === win[4] && win[4] === win[8] && win[8] !== "") {
        stopPlay()
    }
    else if (win[2] === win[4] && win[4] === win[6] && win[6] !== "") {
        stopPlay()
    }
    else {
        if (fair() === true) {
            setTimeout(() => {
                reset();
            }, 500);
        }
    }
}

function stopPlay() {
    if (player === "X") {
        ++X_target.innerHTML;
    } else if (player === "O") {
        ++O_target.innerHTML;
    }
    resultBox();
    endPlaying = true;
}

function resultBox() {
    if (idValueFromIntroPage === 'PlayWithCPU' && player === "O") {
        box.innerHTML = `${player} (CPU) Winner`;
    } else {
        box.innerHTML = `${player} Winner`;
    }

    box.style.display = 'block';
    box.onclick = function () {
        reset()
    }
}

function reset() {
    for (let i = 0; i < 9; i++) {
        boxesArray[i].innerHTML = "";
    }
    player = "X";
    endPlaying = false;
    box.style.display = 'none';
}

function fair() {
    for (let i = 0; i < 9; i++) {
        if (boxesArray[i].innerHTML === "") {
            return false;
        }
    }
    return true;
}

restartBtn.onclick = function () {
    clickEffect.play();
    reset()
    X_target.innerHTML = O_target.innerHTML = 0;
}

// Click Effect Voice
var clickEffect = new Audio();
clickEffect.src = "clickEffect.wav";

function findTheEle() {

    let win = [];
    for (let i = 0; i < 9; i++) {
        win[i] = boxesArray[i].innerHTML;
    }

    if (win[0] === win[1] && win[1] !== "" && win[2] === "") {
        eleCpu = document.getElementById(2);
    }
    else if (win[0] === win[2] && win[2] !== "" && win[1] === "") {
        eleCpu = document.getElementById(1);
    }
    else if (win[1] === win[2] && win[2] !== "" && win[0] === "") {
        eleCpu = document.getElementById(0);
    }

    else if (win[3] === win[4] && win[4] !== "" && win[5] === "") {
        eleCpu = document.getElementById(5);
    }
    else if (win[3] === win[5] && win[5] !== "" && win[4] === "") {
        eleCpu = document.getElementById(4);
    }
    else if (win[4] === win[5] && win[5] !== "" && win[3] === "") {
        eleCpu = document.getElementById(3);
    }

    else if (win[6] === win[7] && win[7] !== "" && win[8] === "") {
        eleCpu = document.getElementById(8);
    }
    else if (win[6] === win[8] && win[8] !== "" && win[7] === "") {
        eleCpu = document.getElementById(7);
    }
    else if (win[7] === win[8] && win[8] !== "" && win[6] === "") {
        eleCpu = document.getElementById(6);
    }

    else if (win[2] === win[4] && win[4] !== "" && win[6] === "") {
        eleCpu = document.getElementById(6);
    }
    else if (win[6] === win[4] && win[4] !== "" && win[2] === "") {
        eleCpu = document.getElementById(2);
    }
    else if (win[2] === win[6] && win[6] !== "" && win[4] === "") {
        eleCpu = document.getElementById(4);
    }

    else if (win[0] === win[4] && win[4] !== "" && win[8] === "") {
        eleCpu = document.getElementById(8);
    }
    else if (win[8] === win[4] && win[4] !== "" && win[0] === "") {
        eleCpu = document.getElementById(0);
    }
    else if (win[0] === win[8] && win[8] !== "" && win[4] === "") {
        eleCpu = document.getElementById(4);
    }

    else if (win[0] === win[3] && win[3] !== "" && win[6] === "") {
        eleCpu = document.getElementById(6);
    }
    else if (win[0] === win[6] && win[6] !== "" && win[3] === "") {
        eleCpu = document.getElementById(3);
    }
    else if (win[6] === win[3] && win[3] !== "" && win[0] === "") {
        eleCpu = document.getElementById(0);
    }

    else if (win[1] === win[4] && win[4] !== "" && win[7] === "") {
        eleCpu = document.getElementById(7);
    }
    else if (win[1] === win[7] && win[7] !== "" && win[4] === "") {
        eleCpu = document.getElementById(4);
    }
    else if (win[7] === win[4] && win[4] !== "" && win[1] === "") {
        eleCpu = document.getElementById(1);
    }

    else if (win[2] === win[5] && win[5] !== "" && win[8] === "") {
        eleCpu = document.getElementById(8);
    }
    else if (win[2] === win[8] && win[8] !== "" && win[5] === "") {
        eleCpu = document.getElementById(5);
    }
    else if (win[8] === win[5] && win[5] !== "" && win[2] === "") {
        eleCpu = document.getElementById(2);
    }

    else if (win[0] === "" || win[2] === "" || win[4] === "" || win[6] === "" || win[8] === "") {
        let arrNumber = [0, 2, 4, 6, 8]
        for (let i = 0; i < 5; i++) {

            let index = Math.floor((Math.random() * arrNumber.length))
            eleCpu = document.getElementById(arrNumber[index]);

            if (eleCpu.innerHTML === "") {
                // to Delete The Selected Items And Not Met The IF condition
                arrNumber = arrNumber.slice(0, index).concat(arrNumber.slice(index + 1));
                break;
            }
            else {
                // to Delete The Selected Items And Not Met The IF condition
                arrNumber = arrNumber.slice(0, index).concat(arrNumber.slice(index + 1));
            }
            i = 0;
        }
    }
    else {
        arrayOfBoxes();
    }
}

function arrayOfBoxes() {
    if (fair() === false) {
        let arrayOfIdBoxes = [0, 1, 2, 3, 4, 5, 6, 7, 8]

        for (let i = 0; i <= arrayOfIdBoxes.length; i++) {

            let index = Math.floor((Math.random() * arrayOfIdBoxes.length))
            eleCpu = document.getElementById(arrayOfIdBoxes[index]);

            if (arrayOfIdBoxes.length !== 0) {
                if (eleCpu.innerHTML === "") {
                    arrayOfIdBoxes = arrayOfIdBoxes.slice(0, index).concat(arrayOfIdBoxes.slice(index + 1));
                    break;
                }
                else {
                    // to Delete The Selected Items And Not Met The IF condition
                    arrayOfIdBoxes = arrayOfIdBoxes.slice(0, index).concat(arrayOfIdBoxes.slice(index + 1));
                }
            }
            i = 0;
        }
    }
}



