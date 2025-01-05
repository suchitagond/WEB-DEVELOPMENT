const selectBox = document.querySelector(".select-box"),
    selectXBut = selectBox.querySelector(".playerX"),
    selectOBut = selectBox.querySelector(".playerO"),
    playBoard = document.querySelector(".play-board"),
    players = document.querySelector(".players"),
    resultBox = document.querySelector(".result-box"),
    wonText = resultBox.querySelector(".won-text"),
    replayBut = resultBox.querySelector("button"),
    allBox = document.querySelectorAll("section span");

window.onload = () => {
    for (let i = 0; i < allBox.length; i++) {
        allBox[i].setAttribute("onclick", "clickedBox(this)");
    }
}
selectXBut.onclick = () => {
    selectBox.classList.add("hide");
    playBoard.classList.add("show");
}
selectOBut.onclick = () => {
    selectBox.classList.add("hide");
    playBoard.classList.add("show");
    players.setAttribute("class", "players active player")
}

let playerXIcon = "fas fa-times";
let playerOIcon = "far fa-circle";
let playerSign = "X";
let runBot = true;

function clickedBox(element) {
    if (players.classList.contains("player")) {
        playerSign = "O";
        element.innerHTML = `<i class="${playerOIcon}"></i>`;
        players.classList.remove("active");
        element.setAttribute("id", playerSign);
    } else {
        element.innerHTML = `<i class="${playerXIcon}"></i>`;
        players.classList.add("active");
        element.setAttribute("id", playerSign);
    }
    selectWinner();
    playBoard.style.pointerEvents = "none";
    element.style.pointerEvents = "none";
    let randomDelayTime = ((Math.random() * 1000) + 200).toFixed();
    setTimeout(() => {
        bot(runBot);
    }, randomDelayTime);
}


function bot(runBot) {
    if (runBot) {
        playerSign = "O";
        let array = [];
        for (let i = 0; i < allBox.length; i++) {
            if (allBox[i].childElementCount == 0) {
                array.push(i);
            }
        }
        let randomBox = array[Math.floor(Math.random() * array.length)];
        if (array.length > 0) {
            if (players.classList.contains("player")) {
                allBox[randomBox].innerHTML = `<i class="${playerXIcon}"></i>`;
                players.classList.add("active");
                playerSign = "X";
                allBox[randomBox].setAttribute("id", playerSign);
            } else {
                allBox[randomBox].innerHTML = `<i class="${playerOIcon}"></i>`;
                players.classList.remove("active");
                allBox[randomBox].setAttribute("id", playerSign);
            }
            selectWinner();
        }
        allBox[randomBox].style.pointerEvents = "none";
        playBoard.style.pointerEvents = "auto";
        playerSign = "X";
    }
}

function getClass(idname) {
    return document.querySelector(".box" + idname).id;
}

function checkClasses(val1, val2, val3, sign) {
    if (getClass(val1) == sign && getClass(val2) == sign && getClass(val3) == sign) {
        return true;
    }
}

function selectWinner() {
    if (checkClasses(1, 2, 3, playerSign) || checkClasses(4, 5, 6, playerSign) || checkClasses(7, 8, 9, playerSign) || checkClasses(1, 4, 7, playerSign) || checkClasses(2, 5, 8, playerSign) || checkClasses(3, 6, 9, playerSign) || checkClasses(1, 5, 9, playerSign) || checkClasses(3, 5, 7, playerSign)) {
        console.log(playerSign + " " + " is a winner");
        runBot = false;
        bot(runBot);
        setTimeout(() => {
            playBoard.classList.remove("show");
            resultBox.classList.add("show");
        }, 700);

        wonText.innerHTML = `player <p>${playerSign}</p> won the game!`;
    }
    else {
        if (getClass(1) != "" && getClass(2) != "" && getClass(3) != "" && getClass(4) != "" && getClass(5) != "" && getClass(6) != "" && getClass(7) != "" && getClass(8) != "" && getClass(9) != "") {
            runBot = false;
            bot(runBot);
            setTimeout(() => {
                playBoard.classList.remove("show");
                resultBox.classList.add("show");
            }, 700);

            wonText.textContent = `Match has been drawn!`;
        }
    }
}

replayBut.onclick = () => {
    window.location.reload();
}
