let score1 = document.getElementById('score-1');
let score2 = document.getElementById('score-2');
let dice = document.querySelector('.dice');
let roll = document.getElementById('btn-roll');
let hold = document.getElementById("btn-hold");
let current1 = document.getElementById('current-1');
let output = document.getElementById('outputText');

let current = 0;
let playerTurn = 1;
let scores = [0, 0, 0];

//function for switching players turn
let switchPlayer = function(){
	current = 0;
	document.getElementById(`current-${playerTurn}`).textContent = current;
	if(playerTurn == 1){
		playerTurn = 2;
		output.innerHTML = `Player ${playerTurn}'s turn`;
	}else{
		playerTurn = 1;
		output.innerHTML = `Player ${playerTurn}'s turn`;
	}
}

// generate random dice number, in dice number upper than 1 - current will grow up, else current 0
roll.addEventListener('click', function(){
	let = randomNumber = Math.trunc(Math.random()*6)+1;
	dice.src = `img/Dice-${randomNumber}.png`;
	output.innerHTML = `Playing...`;

	if(randomNumber > 1){
		current += randomNumber;
		document.getElementById(`current-${playerTurn}`).textContent = current;
	}
	else{
		switchPlayer();
	}
});

// add current to scores, current be 0 and if player's score >= 100 text will be say about who win
hold.addEventListener('click', function(){
	scores[playerTurn] += current;
	document.getElementById(`score-${playerTurn}`).textContent = scores[playerTurn];
	current = 0;
	document.getElementById(`current-${playerTurn}`).textContent = current;
	if(100 <= scores[playerTurn]){
		output.innerHTML = `Player ${playerTurn} WIN!`;
	}
	else{
		switchPlayer();
	}
});