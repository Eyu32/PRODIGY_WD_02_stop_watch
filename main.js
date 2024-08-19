let displayTime = document.querySelector(".displayTime")
let lap = document.getElementById("laps")
let toggleBtn = document.getElementById("startBtn")
let lapBtn = document.getElementById("lapBtn")

let [centiSeconds, seconds,  minutes] = [0, 0, 0]
let timer = null

function stopWatch(){
    centiSeconds++;
    if (centiSeconds == 100){
        centiSeconds = 0;
        seconds++;
        if(seconds == 60){
            seconds = 0
            minutes++;
        }

    }
    getTimer()
}

function getTimer(){
    let min = minutes < 10 ? "0" + minutes : minutes;
    let sec = seconds < 10 ? "0" + seconds : seconds;
    let centiSec = centiSeconds < 10 ? "0" + centiSeconds : centiSeconds;


    displayTime.innerHTML = min + ":"+ sec + ":" + centiSec;
    return min + ":"+ sec + ":" + centiSec;
}

function toggleWatch(){
    if (timer === null){
        timer = setInterval(stopWatch, 10)
        toggleBtn.textContent = "Stop"
        lapBtn.textContent = "Lap"
    }else{
        clearInterval(timer)
        timer = null;
        toggleBtn.textContent = "Resume"
        lapBtn.textContent = "Reset"
    }
    
}

function toggleLapAndreset(){
    if (timer === null){
        [centiSeconds, seconds,  minutes] = [0, 0, 0]
        displayTime.innerHTML = "00:00:00";
        lap.innerHTML = ""
        clearInterval(timer)
        timer = null
        toggleBtn.textContent = "Start";
        lapBtn.textContent = "Reset"

    }else if(timer !== null){
        var li = document.createElement("li")
        li.innerHTML = getTimer()
        lap.appendChild(li)
        lapBtn.textContent = "Lap"
    }
}