let timerDisplay = document.querySelector(".timerDisplay");
let startBtn = document.getElementById("startBtn");
let stopBtn = document.getElementById("stopBtn");
let resetBtn = document.getElementById("resetBtn");

let msec = 0;
let secs = 0;
let mins = 0;

let timer = null;

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);

function startTimer() {
    if (timer !== null) {
        clearInterval(timer);
    }
    timer = setInterval(runTimer, 10);
}

function stopTimer() {
    clearInterval(timer);
}

function resetTimer() {
    clearInterval(timer);
    msec = secs = mins = 0;
    timerDisplay.innerHTML = "00 : 00 : 00";
}

function runTimer() {
    msec++;
    if (msec == 100) {
        msec = 0;
        secs++;
        if (secs == 60) {
            secs = 0;
            mins++;
        }
    }

    let m = mins < 10 ? "0" + mins : mins;
    let s = secs < 10 ? "0" + secs : secs;
    let ms = msec < 10 ? "0" + msec : msec;

    timerDisplay.innerHTML = `${m} : ${s} : ${ms}`;
}
