function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

//console.log(getRandomInt(3));

function getComputerChoice() {
	let result = getRandomInt(3);
	//console.log(result);
	if (result === 0 ) {
		console.log("rock");
	} else if (result === 1 ) {
		console.log("paper");
	} else {
		console.log("scissors");
	}
}

getComputerChoice();