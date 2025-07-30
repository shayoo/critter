const critter = document.getElementById("critter");
const scoreBoard = document.getElementById("scoreBoard");
let score = 0;

function moveCritter() {
  const x = Math.random() * (window.innerWidth - 80);
  const y = Math.random() * (window.innerHeight - 80);
  critter.style.left = `${x}px`;
  critter.style.top = `${y}px`;
}

function showCritter() {
  moveCritter();
  critter.style.display = "block";
  setTimeout(() => {
    critter.style.display = "none";
  }, 1000);
}

critter.addEventListener("click", () => {
  score++;
  scoreBoard.textContent = `Score: ${score}`;
  critter.style.display = "none";
});

setInterval(showCritter, 1500);
