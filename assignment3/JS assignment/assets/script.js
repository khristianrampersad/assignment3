// GAME DISPLAYS
var intro = document.getElementById('intro');
var game = document.getElementById('game');

// GAME MESSAGE AREA
var message = document.getElementById('message');

// GAME INPUT
var guess = document.getElementById('guess');

// GAME FEEDBACK
var feedback = document.getElementById('feedback');

// GAME BOARD LETTERS
var letter_1 = document.getElementById('letter_1');
var letter_2 = document.getElementById('letter_2');
var letter_3 = document.getElementById('letter_3');

// CORRECT ANSWER: dog
var answer_1 = 'd';
var answer_2 = 'o';
var answer_3 = 'g';

// GAME SCORING
var wrong_max = 3;
var wrong_count = 0;

// HANGMAN CONTAINERS & GRAPHICS
var head = document.getElementById('head');
var body = document.getElementById('body');
var legs = document.getElementById('legs');

// HANGMAN GRAPHICS
var wrong_1 = 'O';
var wrong_2 = '+';
var wrong_3 = '^';
	
function start_game () {		
	// HIDE THE INTRO SCREEN
	intro.style.display = 'none';
	// SHOW THE GAME BOARD
	game.style.display = 'block';
	// CLEAR THE HANGMAN GRAPHICS
	head.innerHTML = '';
	body.innerHTML = '';
	legs.innerHTML = '';
	// UPDATE THE GAME MESSAGE
	var str = document.getElementById("message").innerHTML;
	var res = str.replace("Would you like to play?", "Please enter one letter at a time. You get 3 guesses");
	document.getElementById("message").innerHTML = res;
}	

function submit_guess () {
	// GET THE GUESS
	var letter_guessed = guess.value.toLowerCase();
	console.log(letter_guessed);
	
	// IS THE GUESS CORRECT
	if (letter_guessed == answer_1) {
		letter_1.value = answer_1;
		document.getElementById("feedback").innerHTML = "Yes, that's one of the letters!";
	
	} else if (letter_guessed == answer_2) {
		letter_2.value = answer_2;
		document.getElementById("feedback").innerHTML = "Correct!";
		
	} else if (letter_guessed == answer_3) {
		letter_3.value = answer_3;
		document.getElementById("feedback").innerHTML = "Yup, almost there!";
		
	} else {
		wrong_guess();
		document.getElementById("feedback").innerHTML = "Mmm... that's not it";
	}
}

function gameOver(win) {
	if (win) {
		feedback.innerHTML = messages.win;
		feedback.classList.add('win');
	} else {
		feedback.innerHTML = messages.lose;
		feedback.classList.add('lose');
	}
	
	letter_guessed.style.display = letter_guessed.style = 'none';
	letter_guessed.value = '';
}

function wrong_guess () {
	
	// INCREASE WRONG GUESS COUNT
	wrong_count++;
	console.log(wrong_count);
	
	// DISPLAY HANGMAN GRAPHIC
	if (wrong_count == 1) {
		head.innerHTML = wrong_1;
	} else if (wrong_count == 2) {
		body.innerHTML = wrong_2;
	} else if (wrong_count == 3) {
		legs.innerHTML = wrong_3;
	// IS THE GAME OVER
	}
	if (wrong_count >= wrong_max) {
		console.log('game over');
	
	}
}


function reset_game () {

	// 	HIDE THE GAME BOARD
	game.style.display = 'none';
	// 	SHOW THE INTRO SCREEN
	intro.style.display = 'block';	
	// SET THE VALUE OF ALL GAME BOARD LETTERS TO ''
	var restart = document.getElementById("restart").onclick = start_game;
}

