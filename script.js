let computerScore = 0;
let humanScore = 0;
function play1() {
	function getRandomInt(max) {
		return Math.floor(Math.random() * max);
	}

	//console.log(getRandomInt(3));

	function getComputerChoice() {
		let result = getRandomInt(3);
		//console.log(result);
		if (result === 0) {
			console.log("Computer Choice:" + "Rock");
			return result = "Rock";
		} else if (result === 1) {
			console.log("Computer Choice:" + "Paper");
			return result = "Paper";
		} else {
			console.log("Computer Choice:" + "Scissors");
			return result = "Scissors";
		}
	}

	function getHumanChoice() {
		let offerUser = prompt("Choose, Rock, Paper or Scissors ? :) :");
		console.log("Human Choice:", offerUser);
		return offerUser;
	}

	function playRound(humanChoice, computerchoice) {
		if (computerchoice === "Rock" && humanChoice === "Paper") {
			console.log("Winner: Human");
			humanScore += 1;
			console.log("ComputerScore:", computerScore);
			console.log("HumanScore:", humanScore);
			//return computerScore;
		} else if (computerchoice === "Rock" && humanChoice === "Scissors") {
			console.log("Winner: Computer");
			computerScore += 1;
			console.log("ComputerScore:", computerScore);
			console.log("HumanScore:", humanScore);
			//return computerScore;
		} else if (computerchoice === "Paper" && humanChoice === "Rock") {
			console.log("Winner: Computer");
			computerScore += 1;
			console.log("ComputerScore:", computerScore);
			console.log("HumanScore:", humanScore);
			//return humanScore;
		} else if (computerchoice === "Scissors" && humanChoice === "Rock") {
			console.log("Winner: Human");
			humanScore += 1;
			console.log("ComputerScore:", computerScore);
			console.log("HumanScore:", humanScore);
			//return humanScore;
		} else if (computerchoice === "Paper" && humanChoice === "Scissors") {
			console.log("Winner: Human");
			humanScore += 1;
			console.log("ComputerScore:", computerScore);
			console.log("HumanScore:", humanScore);
		} else if (computerchoice === "Scissors" && humanChoice === "Paper") {
			console.log("Winner: Computer");
			computerScore += 1;
			console.log("ComputerScore:", computerScore);
			console.log("HumanScore:", humanScore);
		} else {
			console.log("Winner: none");
		}
		//console.log("ComputerScore:", computerScore);
		//console.log("HumanScore:", humanScore);
	}
	const humanSelection = getHumanChoice();
	const computerSelection = getComputerChoice();

	playRound(humanSelection, computerSelection);
}

function playGame() {
	for (let i = 0; i < 5; i++) {
		play1();
		console.log("--------> Stage :", i + 1, "----------");
	}
	console.log("=== RESULT ===");
	console.log("Final Computer Score:", computerScore);
	console.log("Final Human Score:", humanScore);
	if (computerScore > humanScore) {
		console.log("COMPUTER WINS THE GAME! 💻");
	} else if (humanScore > computerScore) {
		console.log("HUMAN WINS THE GAME! 🎉");
	} else {
		console.log("IT'S A TIE! 🤝");
	}
}

playGame();
