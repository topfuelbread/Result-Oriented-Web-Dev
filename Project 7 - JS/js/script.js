let colours = ['red', 'yellow', 'green', 'blue', 'violet', 'cat1', 'cat2'];
let width = window.innerWidth;
let height = window.innerHeight;
let body = document.body;
let scores = document.querySelectorAll('.score');
let count = 0;		//counts the number of popped balloons
let winCount = 10;	//the number of balloons to be popped in order to win
let curCount = 0;	//number of balloons on the screen
let gameOver = false;
let totalShadow = document.querySelector('.total-shadow');

function createBalloon(){
	// for picking balloon type
	let div = document.createElement('div');
	let rand = Math.floor(Math.random()*(colours.length));
	div.className = `balloon balloon-${colours[rand]}`;

	// for random vertical position
	rand = Math.floor(Math.random() * (width - 100));
	div.style.left = rand + 'px';

	//to distinguish balloons from each other... attribute = data number
	div.dataset.number = curCount++;

	body.appendChild(div);	//create the balloon
	animateBalloon(div);	//balloon movement
}

function animateBalloon(elem){
	let position = 0;
	let randomSpawn = Math.floor(Math.random()*6 - 3);					//[-3,3)
	let interval = setInterval(frame, 12 - Math.floor(count/10) + randomSpawn);	//frame() is called every 10ms

	function frame(){
		if (position >= (height + 200) && (document.querySelector('[data-number="'+elem.dataset.number+'"]') !== null)){
			//if the balloon has reached the top, stop the animation and delete the balloon
			clearInterval(interval);
			gameOver = true;
		}
		else{
			// moves the balloon up
			position++;
			elem.style.top = height - position + 'px';
		}
	}
}

//the below code does not work as balloons do not exist on the webpage
// let balloons = document.querySelectorAll(".balloon");
// for (let i = 0; i < balloons.length; i++){
// 	balloons[i].addEventListener('click', function(){
// 		balloons[i].remove();
// 	})
// }

//instead, attach an event listener to the whole webpage
document.addEventListener('click', function(event){
	if (event.target.classList.contains('balloon')){
		deleteBalloon(event.target);
		updateScore();
	}
})

function updateScore(){
	for (let i = 0; i < scores.length; i++){
		scores[i].textContent = count;
	}
}

function deleteBalloon(elem){
	elem.remove();
	count++;
	updateScore();
	popSound();

}

function startGame(){
	restartGame();
	let timeout = 0;
	document.querySelector('.total').textContent = winCount;

	let loop = setInterval(function(){
		timeout = Math.floor(Math.random*600 - 100);
		if (!gameOver && count < winCount)
			createBalloon();
		else if (count != winCount){	//lose
			clearInterval(loop);
			totalShadow.style.display = 'flex';
			totalShadow.querySelector('.lose').style.display = 'block';
		}
		else{							//win
			clearInterval(loop);
			totalShadow.style.display = 'flex';
			totalShadow.querySelector('.win').style.display = 'block';
		}
	}, 800 - timeout)
}

function restartGame(){
	count = 0; 
	updateScore();
	gameOver = false;
	let remover = document.querySelectorAll('.balloon');
	for (let i = 0; i < remover.length; i++)
		remover[i].remove();
}

document.querySelector('.restart').addEventListener('click',function(){
	totalShadow.style.display = 'none';
	startGame();
});

document.querySelector('.cancel').addEventListener('click',function(){
	totalShadow.style.display = 'none';
	let remover = document.querySelectorAll('.balloon');
	for (let i = 0; i < remover.length; i++)
		remover[i].remove();
});


function popSound(){
	let audio = document.createElement('audio');
	audio.src = 'sounds/pop.mp3'
	audio.play();
}







startGame();