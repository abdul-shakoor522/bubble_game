let time = 60;
let score = 0;
var hit;
function scoreCounter() {
  score += 10;
  document.querySelector("#scoreVal").textContent = score;
}
function gethits() {
  hitNum = Math.floor(Math.random() * 10);
  document.querySelector("#hitVal").textContent = hitNum;
}

function timer() {
  var timeIntv = setInterval(() => {
    if (time > 0) {
      time--;
      document.querySelector("#timerValue").textContent = time;
    } else {
      clearInterval(timeIntv);
      document.querySelector("#pbtm").innerHTML = `<h1>Game Ended</h1>`;
      document.querySelector("#pbtm").innerHTML = `<a href='' style='text-decoration:none;border-radius:5px; padding:10px 30px;color:#fff; background-color: black'>Play Again</a>`;
    }
  }, 1000);
}

function makeBubbles() {
  let bubbles = "";
  for (let i = 1; i <= 112; i++) {
    let randNum = Math.floor(Math.random() * 10);
    bubbles += `<div class="bubble">${randNum}</div>`;
  }
  document.querySelector("#pbtm").innerHTML = bubbles;
}

document.querySelector("#pbtm").addEventListener("click", function (dets) {
  let clickedNum = Number(dets.target.textContent);
  if (clickedNum === hitNum) {
    scoreCounter();
    gethits();
    makeBubbles();
    
  }
});

makeBubbles();
timer();
gethits();
