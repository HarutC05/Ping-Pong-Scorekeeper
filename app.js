const p1Btn = document.querySelector("#p1Btn");
const p2Btn = document.querySelector("#p2Btn");

const p1Score = document.querySelector("#p1Score");
const p2Score = document.querySelector("#p2Score");

const resetBtn = document.querySelector("#reset");

const scoreLimit = document.querySelector("#scoreLimit");

let p1Scr = 0;
let p2Scr = 0;
let winningScore = 10;
let isGameOver = false;

// Disable buttons function to disable the buttons when the game is over
function disableButtons() {
    p1Btn.disabled = true;
    p2Btn.disabled = true;
}

function enableButtons() {
    p1Btn.disabled = false;
    p2Btn.disabled = false;
}

// Player 1 button click event
p1Btn.addEventListener("click", function () {
    if (!isGameOver) {
        p1Scr++;
        p1Score.textContent = p1Scr;
        if (p1Scr === winningScore) {
            isGameOver = true;
            p1Score.classList.add("winner");
            p2Score.classList.add("loser");
            disableButtons();  // Disable buttons when game is over
        }
    }
});

// Player 2 button click event
p2Btn.addEventListener("click", function () {
    if (!isGameOver) {
        p2Scr++;
        p2Score.textContent = p2Scr;
        if (p2Scr === winningScore) {
            isGameOver = true;
            p1Score.classList.add("loser");
            p2Score.classList.add("winner");

            disableButtons();  // Disable buttons when game is over
        }
    }
});

// Reset button event listener
const reset = function () {
    isGameOver = false;
    p1Scr = 0;
    p2Scr = 0;
    p1Score.textContent = 0;
    p2Score.textContent = 0;
    p1Score.classList.remove("winner", "loser");
    p2Score.classList.remove("winner", "loser");
    enableButtons();  // Re-enable buttons when the game is reset
}

// Score limit change event listener
scoreLimit.addEventListener("change", function () {
    winningScore = +this.value;
    reset();
});

// Reset button click event
resetBtn.addEventListener("click", reset);
