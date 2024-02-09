let btn = document.getElementById('btn');
	let output = document.getElementById('outputText');
	let secretNumber = [Math.floor(Math.random()*21)];
	console.log(secretNumber);

	let element = document.getElementById('bodyy');
	let inputStyle = document.getElementById('userInput');
	let reset = document.getElementById('reset');

	let scoreText = document.getElementById('score');
	let score = 0;
	let highscoreText = document.getElementById('highscore');
	let highscore = 0;

btn.addEventListener('click', function(){
	let input = document.getElementById('userInput').value;
	if(input == secretNumber){
		output.innerHTML = `Correct number!`;
		element.style.backgroundColor = '#60b445';
		inputStyle.style.backgroundColor = '#60b445';
		score++;
		secretNumber = [Math.floor(Math.random()*21)];
		console.log(secretNumber);
	}
	else if(input < secretNumber){
		output.innerHTML = `Too low!`;
	}
	else if(input > secretNumber){
		output.innerHTML = `Too high!`;
	}
	scoreText.innerHTML = score;
	if(score > highscore){
		highscore = score;
	}

	highscoreText.innerHTML = highscore;
})

reset.addEventListener('click', function() {
	secretNumber = [Math.floor(Math.random()*21)];
	console.log(secretNumber);
	
	element.style.backgroundColor = '#4b3131';
	inputStyle.style.backgroundColor = '#4b3131';
	scoreText.innerHTML = '0';
	output.innerHTML = 'Start catching...';
})