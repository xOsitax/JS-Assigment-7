// Variables for the DOM elements
const word = document.getElementById("word");
const text = document.getElementById("text");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const endgameEl = document.getElementById("end-game-container");
const settings = document.getElementById("settings");
const settingsForm = document.getElementById("settings-form");
const settingsBtn = document.getElementById("settings-btn");
const difficultySelect = document.getElementById("difficulty");

// Array
const words = [
  "dependent",
  "dog",
  "superficial",
  "admit",
  "juice",
  "javascript",
  "developer",
  "airplane",
  "great",
  "fun",
  "manipulate",
  "cat",
  "transition",
  "school",
  "computer",
  "programming",
  "drag",
  "loving",
  "north",
];

//Initializing word
let randomWord;

//Initializing score
let score = 0;

//Initializing time
let time = 10;

text.focus();
addWordToDOM();
const timeInterval = setInterval(updateTime, 1000);

// Event listener for the text input
text.addEventListener("input", (e) => {
  const insertedText = e.target.value;
  if (insertedText === randomWord) {
    updateScore();
    addWordToDOM();

    time += 5;
    e.target.value = "";
  }
});

// Function to add a random word to the DOM
function addWordToDOM() {
  randomWord = words[Math.floor(Math.random() * words.length)];
  word.innerHTML = randomWord;
}
function updateScore() {
  score++;
  scoreEl.innerHTML = score;
}
function updateTime() {
  time--;

  timeEl.innerHTML = time + "s";
  if (time === 0) {
    clearInterval(timeInterval);
    gameOver();
  }
}
function gameOver() {
  endgameEl.innerHTML = `
      <h1>Game Over!</h1>
      <p>Your final score is <strong>${score}</strong></p>
      <button onclick="location.reload()">Play Again</button>
    `;
  endgameEl.style.display = "flex";
}
