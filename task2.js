let timer;
let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
let running = false;

function updateDisplay() {
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  let ms = milliseconds < 10 ? "0" + milliseconds : milliseconds;

  document.getElementById("display").innerText =
    h + ":" + m + ":" + s + ":" + ms;
}

function start() {
  if (!running) {
    running = true;
    timer = setInterval(() => {
      milliseconds++;

      if (milliseconds == 100) {
        milliseconds = 0;
        seconds++;
      }

      if (seconds == 60) {
        seconds = 0;
        minutes++;
      }

      if (minutes == 60) {
        minutes = 0;
        hours++;
      }

      updateDisplay();
    }, 10);
  }
}

function pause() {
  clearInterval(timer);
  running = false;
}

function reset() {
  clearInterval(timer);
  milliseconds = 0;
  seconds = 0;
  minutes = 0;
  hours = 0;
  running = false;
  updateDisplay();
  document.getElementById("laps").innerHTML = "";
}

function lap() {
  let lapTime = document.getElementById("display").innerText;
  let li = document.createElement("li");
  li.innerText = "Lap: " + lapTime;
  document.getElementById("laps").appendChild(li);
}
