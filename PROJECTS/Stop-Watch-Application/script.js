
const playButton = document.getElementsByClassName("play")[0];
const lapButton = document.getElementsByClassName("lap")[0];
const resetButton = document.getElementsByClassName("reset")[0];
const clearButton = document.getElementsByClassName("clear-all")[0];
const minute = document.getElementsByClassName("minute")[0];
const second = document.getElementsByClassName("sec")[0];
const miliSecond = document.getElementsByClassName("msec")[0];
const laps = document.getElementsByClassName("laps")[0];
const bg = document.getElementsByClassName("outerCircle")[0];

let isplay = false
let min;
let minCounter = 0;
let sec;
let secCounter = 0;
let miliSec;
let miliCounter = 0;
let isReset = false;
let lapItem = 0;

const toggleButton = () => {
    lapButton.classList.remove("hidden");
    resetButton.classList.remove("hidden");
}

const play = () => {
    if (!isplay && !isReset) {
        playButton.innerHTML = 'Pause';
        bg.classList.add("animation-bg");
        min = setInterval(() => {
            minute.innerHTML = `${++minCounter} :`;
        }, 60 * 1000);
        sec = setInterval(() => {
            if (secCounter === 60) {
                secCounter = 0;
            }
            second.innerHTML = `&nbsp;${++secCounter} :`;
        }, 1000);
        miliSec = setInterval(() => {
            if (miliCounter === 100) {
                miliCounter = 0;
            }
            miliSecond.innerHTML = `&nbsp;${++miliCounter} `;
        }, 10);
        isplay = true;
        isReset = true
    } else {
        playButton.innerHTML = 'Play';
        clearInterval(min);
        clearInterval(sec);
        clearInterval(miliSec);
        isplay = false;
        isReset = false
        bg.classList.remove("animation-bg");

    }
    toggleButton();
}

const reset = () => {
    isReset = true;
    minCounter = 0;
    secCounter = 0;
    miliCounter = 0;
    play();
    clearAll();
    lapButton.classList.add("hidden");
    resetButton.classList.add("hidden");
    minute.innerHTML = '0 :'
    second.innerHTML = '&nbsp; 0 :'
    miliSecond.innerHTML = '&nbsp; 0';
}

const lap = () => {
    const li = document.createElement("li");
    const number = document.createElement("span");
    const time = document.createElement("span");

    li.setAttribute("class", "lap-item");
    number.setAttribute("class", "number");
    time.setAttribute("class", "time");

    number.innerText = `#${++lapItem}`;
    time.innerHTML = `${minCounter} : ${secCounter} : ${miliCounter}`;

    li.append(number, time);
    laps.append(li);

    clearButton.classList.remove("hidden");
}

const clearAll = () => {
    laps.innerHTML = '';
    laps.append(clearButton);
    clearButton.classList.add("hidden");
    lapItem = 0;

}

playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
lapButton.addEventListener("click", lap);
clearButton.addEventListener("click", clearAll);
