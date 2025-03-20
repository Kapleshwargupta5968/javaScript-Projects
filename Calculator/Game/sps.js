let uScore = 0;
let cScore = 0;
const uInput = document.querySelectorAll(".box");
const msg = document.querySelector("#messageDisplay");
let uResult = document.querySelector("#uScore");
let cResult = document.querySelector("#cScore");

const genComputerChoice = () => {
    const cPrediction = ["stone", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return cPrediction[randIdx];
};
const gameDraw = () => {
    msg.innerText = "Game was Draw... try again";
    msg.style.backgroundColor = "#ffe5d9"
}

const showWinner = (userWin, userInput, computerChoice) => {
    if (userWin === true) {
        uScore++;
        uResult.innerText = uScore;
        msg.innerText = `You Win! Your ${userInput} beats ${computerChoice}`;
        msg.style.backgroundColor = "#606c38"
    }
    else {
        cScore++;
        cResult.innerText = cScore;
        msg.innerText = `You Lost... ${computerChoice} Your ${userInput}`;
        msg.style.backgroundColor = "#9d0208";
    }
};

const playGame = (userInput) => {
    console.log("User Choice is::", userInput);
    const computerChoice = genComputerChoice();
    console.log("Computer Choice::", computerChoice);

    if (userInput === computerChoice) {
        gameDraw();
    }
    else {
        let userWin = true;
        if (userInput === "stone") {
            userWin = computerChoice === "paper" ? false : true;
        }
        else if (userInput === "paper") {
            userWin = computerChoice === "scissors" ? false : true;
        }
        else {
            userWin = computerChoice === "stone" ? false : true;
        }
        showWinner(userWin, userInput, computerChoice);
    }
};

uInput.forEach((box) => {
    box.addEventListener("click", () => {
        const userInput = box.getAttribute("id");
        playGame(userInput);
    });
});