
let box = $('.box');
let boxContainer = $('.box-container');
let play = $('.play');
let pause = $('.pause');
let stop = $('.stop');
let range = $('#range');
let up = $('.up');
let right = $('.right');
let down = $('.down');
let left = $('.left');

let intervalId = 0;
let isActive = false;
let speed = $('#range').val();

let deg = 0;
let stepY = 0;
let stepX = 0;
let step = 10;
let stepO = 50;

function rotate(value) {
	box.css('transform', 'rotateX(' + value + 'deg) translateX(' + stepX + 'px)');
}

function verticalDisplacement() {
	boxContainer.css('transform', 'translateY(' + stepY + 'px)');
}

function horizontalDisplacement() {
	box.css('transform', 'translateX(' + stepX + 'px)');
}

function switchIcons() {
	$('.fa-play, .fa-pause').toggleClass('active');
}

function degreesCalc() {
	deg++;
	if (deg >= 360) { deg = 0 };
	rotate(deg);
}

function activeStateSwitcher() {
	isActive = !isActive;
}

play.click(function () {
	if (!isActive) {
		intervalId = setInterval(degreesCalc, speed);
	} else {
		clearInterval(intervalId)
	};
	switchIcons();
	activeStateSwitcher();
});

stop.click(function () {
	clearInterval(intervalId);
	deg = 0;
	rotate(deg);
	isActive = false;
});

box.click(function () {
	if (isActive) {
		clearInterval(intervalId);
		isActive = false;
	} else {
		intervalId = setInterval(degreesCalc, speed);
	}
});

//Ползунок управления скоростью

range.change(function () {
	if (isActive) {
		clearInterval(intervalId);
		speed = 100 - $('#range').val();
		intervalId = setInterval(degreesCalc, speed);
	} else {
		speed = 100 - $('#range').val();
	}
});

//Кнопки управления положением куба

up.click(function () {
	stepY -= step;
	verticalDisplacement();
});

down.click(function () {
	stepY += step;
	verticalDisplacement();
});

right.click(function () {
	stepX += step;
	horizontalDisplacement();
});

left.click(function () {
	stepX += -step;
	horizontalDisplacement();
});


