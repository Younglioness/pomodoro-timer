const start = document.querySelector('#start');
const reset = document.querySelector('#reset');
const overlay = document.querySelector(".overlay");
const timerElement = document.querySelector("#pomodoro-time");

let timerId;

start.addEventListener('click', function() {
    if (start.textContent == 'stop') {
        clearInterval(timerId);
        start.textContent = 'start';
    } else {
        timerId = setInterval(function() {
            start.textContent = 'stop';

            let seconds = +timerElement.textContent.split(":")[1];

            let minutes = +timerElement.textContent.split(":")[0];


            if (seconds != 0) {
                seconds--;
            } else if (minutes != 0 && seconds == 0) {
                seconds = 59;
                minutes--;
            }

            minutes = minutes < 10 ? "0" + minutes : minutes
            seconds = seconds < 10 ? "0" + seconds : seconds

            timerElement.innerText = minutes + ":" + seconds

        }, 100)
    }

})

reset.addEventListener('click', function() {
    timerElement.textContent = '25:00';
    clearInterval(timerId);
})