let cvs = document.querySelector("#canvas");
let ctx = cvs.getContext("2d");
let score = document.querySelector("#score");
let scoreCount = document.querySelector("#scoreCount");
let start = document.querySelector("#start");
let gameOver = document.querySelector("#gameOver");

let bird = new Image();
let bg = new Image();
let fg = new Image();
let pipeTop = new Image();
let pipeBottom = new Image();

let gap = 90;

let xPos = 20;
let yPos = 150;

let grav = 1;

bird.src = "img/bird.png";
bg.src = "img/bg.png";
fg.src = "img/fg.png";
pipeTop.src = "img/pipeTop.png";
pipeBottom.src = "img/pipeBottom.png";

let pipes = [{x: cvs.clientWidth, y: 0}];


document.addEventListener("keydown", moveUp);
document.addEventListener("touchstart", moveUp);

start.addEventListener('click', () => {
	start.style.opacity = 0;
	start.style.zIndex = 0;
	gameOver.style.zIndex = 10;
	score.style.opacity = 1;
	startGame();
	
})
start.addEventListener('touchstart', () => {
	start.style.opacity = 0;
	start.style.zIndex = 0;
	gameOver.style.zIndex = 10;
	score.style.opacity = 1;
	startGame();
	
})

gameOver.addEventListener('click', () => {
	gameOver.style.opacity = 0;
	start.style.zIndex = 10;
	gameOver.style.zIndex = 0;
	pipes = [{x: cvs.clientWidth, y: 0}];
	yPos = 150;
	scoreCount.innerHTML = 0;
	startGame();
	
})
gameOver.addEventListener('touchstart', () => {
	gameOver.style.opacity = 0;
	start.style.zIndex = 10;
	gameOver.style.zIndex = 0;
	pipes = [{x: cvs.clientWidth, y: 0}];
	yPos = 150;
	scoreCount.innerHTML = 0;
	startGame();
	
})


function startGame () {
	ctx.drawImage(bg, 0, 0, 320, 512);
	ctx.drawImage(bird, xPos, yPos);

	yPos += grav;

	let requestId = requestAnimationFrame(startGame);
	
	for (let i = 0; i < pipes.length; i++) {
		ctx.drawImage(pipeTop, pipes[i].x, pipes[i].y);
		ctx.drawImage(pipeBottom, pipes[i].x, pipes[i].y + pipeTop.height + gap);
		ctx.drawImage(fg, 0, cvs.height - fg.height, 320, 118);

		pipes[i].x -= 1;

		if (pipes[i].x == 80) {
			pipes.push({x: cvs.width, y: Math.floor(Math.random() * pipeTop.height) - pipeTop.height})
		}

		if (pipes[i].x == -250) {
			pipes.shift()
		}

		if (xPos + bird.width >= pipes[i].x 
			&& xPos <= pipes[i].x + pipeTop.width
			&& (
				yPos <= pipes[i].y + pipeTop.height 
				|| yPos + bird.width - 20 >= pipes[i].y + pipeTop.height + gap
			)
			|| yPos + bird.width >=	cvs.height - fg.height + 10
		) {
			gameOver.style.opacity = 1;
			cancelAnimationFrame(requestId);
			
		}

		if (pipes[i].x == 10) {
			scoreCount.innerHTML = +scoreCount.innerHTML + 1;
		}
		
	}

	
}

function moveUp() {
	yPos -= 25;
}