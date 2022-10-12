'use strict';

// Date : 12/10/2022
// Day : Wednesday
// Game player vs player


(() => 
{
// button element select
const submitBtnElm = document.querySelector('form');
const resetBtnElm = document.querySelector('#resetBtn');
const p1BtnElm = document.querySelector('.p1Btn');
const p2BtnElm = document.querySelector('.p2Btn');

// for showing success message 
let winingElm = document.querySelector('#wining');
let myImageElm = document.querySelector('#myImage');
// input element select
let inputNumberElm = document.querySelector('#inputNumber');
let winScoreElm = document.querySelector('.winScore span');
let p1ScoreElm = document.querySelector('.p1Score span');
let p2ScoreElm = document.querySelector('.p2Score span');

// datal layer start here
let winScor = 10;
let p1Scor = 0;
let p2Scor = 0;
let trun = 'Trun on';

// sound setting effect
let submitSound = new Audio("audio-sound/submit-sound.wav");
let errorSound = new Audio("audio-sound/error.wav");
let reseSound = new Audio("audio-sound/submit-sound.wav");
let successSound = new Audio("audio-sound/submit-sound.wav");
let playerSound = new Audio("audio-sound/final-button.wav");


// winiscore by default value
winScoreElm.textContent = winScor;

// Genderate random number for player1 and player2
function randomNum(max)
{
	return Math.ceil(Math.random() * winScor)
}

// when player 1 or player 2 will be winner then i want to disabled p1 and p2 button
function disabledFun()
{
	p1BtnElm.setAttribute('disabled','disabled');
	p2BtnElm.setAttribute('disabled','disabled');
}
/*
   --------------------------
   That is just for rest button start 
   --------------------------
*/
// reset value fomr ui 
function resetFromUI()
{
	winScoreElm.textContent = 10;
	p1ScoreElm.textContent = 0;
	p2ScoreElm.textContent = 0;
	winingElm.textContent = '';
	p1BtnElm.removeAttribute('disabled');
	p2BtnElm.removeAttribute('disabled');
	myImageElm.src = '';
}
// reset form data base
function resetFromDataBase()
{
	winScor = 10;
	p1Scor = 0;
	p2Scor = 0;
}
/*
   --------------------------
   when user click the submit button then all think will be rese without winscor value
   --------------------------
*/
function submitBtnResetFormUI()
{
	p1ScoreElm.textContent = 0;
	p2ScoreElm.textContent = 0;
	winingElm.textContent = '';
	p1BtnElm.removeAttribute('disabled');
	p2BtnElm.removeAttribute('disabled');
	myImageElm.src = '';
}
function submitBtnReseFromDataBase()
{
	p1Scor = 0;
	p2Scor = 0;
}

/*
	----------------------------========================------------------------
	---------------------------- Submit button Start Here ----------------------
	----------------------------========================------------------------
*/
// Toking user input
submitBtnElm.addEventListener('submit',(evt) => 
{
	evt.preventDefault();
	let inputValue = Number(inputNumberElm.value);
	// passing input value to the winScor
	winScor = inputValue;
	// input field validation start here
	const isError = inputFieldValidate(inputValue);
	// if not isError then our submit button will be work otherwise it won't be able to submit
	if(!isError)
	{
		// style changing
		 inputNumberElm.style.border = '1px solid #9e9e9ed1';
		// receive input form input box
		receiveValue(inputValue);
		// reset input 
		resetInput();

		// when user give new value then our player1 and palyer2s button will be inabled and then user will be able to play again
		// p2BtnElm.removeAttribute('disabled');
		p1BtnElm.removeAttribute('disabled');

		// rest form ui
		submitBtnResetFormUI();
		// reset form data base
		submitBtnReseFromDataBase();

		// submit button sound
		submitSound.play();
	}else{
		errorSound.play();
	}
});

/*
	----------------------------========================------------------------
	---------------------------- Player button One Start Here ----------------------
	----------------------------========================------------------------
*/
p1BtnElm.addEventListener('click',(evt) => 
{
	// button sound effect
	playerSound.play();
	// p1Scor++;
	// random number calling
	p1Scor = randomNum(p1Scor)

	p1ScoreElm.textContent = p1Scor;
	evt.preventDefault();
	if(trun === 'Trun on')
	{
		// disable player1
		p1BtnElm.setAttribute('disabled','disabled');
		p2BtnElm.removeAttribute('disabled');
	}
	// if player1 values is match with winscor then player1 will be success	
	player1WinFun(p1Scor);
});


/*
	----------------------------========================------------------------
	---------------------------- Player button Two Start Here ----------------------
	----------------------------========================------------------------
*/
p2BtnElm.addEventListener('click',(evt) => 
{
	evt.preventDefault();
	// button sound effect
	playerSound.play();
	// p2Scor++;
	// random number calling
	p2Scor = randomNum(p2Scor);
	p2ScoreElm.textContent = p2Scor;
	if(trun === 'Trun on')
	{
		
		// disable player1
		p2BtnElm.setAttribute('disabled','disabled');
		p1BtnElm.removeAttribute('disabled');
	}
	// if player1 values is match with winscor then player1 will be success	
	player2WinFun(p2Scor);
});
/*
	----------------------------========================------------------------
	---------------------------- Reset button  start Here ----------------------
	----------------------------========================------------------------
*/
resetBtnElm.addEventListener('click',(evt) => 
{
	// sound effect 
	reseSound.play();
	// reset form data base
	resetFromDataBase()
	// rest form ui
	resetFromUI()
	
});

// ---------------------------- Submit button functionality ---------------------
// input field validation function start here
function inputFieldValidate(input)
{
	let isInValid = false;
	// NaN !== NaN results true if value is not real number
	if(!input || input !== input)
	{
		// console.log(`Incorrect input field!!!`);
		inputNumberElm.style.border = '1px solid red';
		isInValid = true;
	}
	return isInValid;
}
// receive input form input box
function receiveValue(inputValue)
{
	winScoreElm.textContent = inputValue;
}
// reset input function 
function resetInput()
{
	inputNumberElm.value = '';
}

// ----------------------- player1 funtionality Start here ---------------------------

// if player1 values is match with winscor then player1 will be success	
function player1WinFun(p1Scor)
{
	if(p1Scor === winScor)
	{
		winingElm.textContent = 'Player 1 is winner';
		myImageElm.src = 'image/one.png';
		// success sound
		successSound.play();
		// disabled function
		disabledFun();
	}
}

// ----------------------- player2 funtionality Start here ---------------------------

// if player1 values is match with winscor then player1 will be success	
function player2WinFun(p2Scor)
{
	if(p2Scor === winScor)
	{
		winingElm.textContent = 'Player 2 is winner';
		myImageElm.src = 'image/Player-2-emoji.png';
		// success sound
		successSound.play();
		disabledFun();
	}
}
})();




