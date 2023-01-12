// SETUP CODE - DO NOT TOUCH
import T from './turtle.js'
import { drawA, drawL } from './examples.js'

// Default settings
T.setup({ canvas: 'canvas' })


// Setup user interaction
// The "start" function runs when the user clicks the "Run code" button and when the web page is loaded
document.querySelector('#btn-run').addEventListener('click', start)
document.querySelector('#btn-clear').addEventListener('click', clear)
start()

function clear() {
	console.log('Cleared canvas')
	T.eraseAll()
}
// END OF SETUP CODE
// -------------------------------------------------------- //
// Do whatever you want below here!

function square() {

	for (let sides = 0; sides < 4; sides++) {
		T.move(40)
		T.turn(90)
	}
}

function star(length, points) {
	let bluntAngle = 360 / points
	let pointAngle = bluntAngle * 2

	for (let counter = 0; counter < points; counter++) {
		T.move(length)
		T.turn(pointAngle)
		T.move(length)
		T.turn(-bluntAngle)
	}
}

function drawH(letterHeight) {
	T.pointInDirection(90)
	T.move(letterHeight / 2)
	T.pointInDirection(0)
	T.penDown()
	T.move(letterHeight)
	T.turn(180)
	T.move(letterHeight / 2)
	T.turn(-90)
	T.move(letterHeight / 2)
	T.turn(-90)
	T.move(letterHeight / 2)
	T.turn(180)
	T.move(letterHeight)
	T.penUp()
}

function drawE(letterHeight) {
	T.pointInDirection(90)
	T.move(letterHeight / 2)
	T.penDown()
	T.move(letterHeight / 2)
	T.turn(180)
	T.move(letterHeight / 2)
	T.turn(90)
	T.move(letterHeight / 2)
	T.turn(90)

	T.move(letterHeight / 2)
	T.turn(180)
	T.move(letterHeight / 2)
	T.turn(90)
	T.move(letterHeight / 2)
	T.turn(90)
	T.move(letterHeight / 2)
	T.penUp()
	T.turn(90)
	T.move(letterHeight)
}

function drawM(letterHeight) {
	T.pointInDirection(90)
	T.move(letterHeight / 2)
	T.penDown()
	T.pointInDirection(0)
	T.move(letterHeight)
	T.turn(130)
	T.move(letterHeight / 2)
	T.turn(-80)
	T.move(letterHeight / 2)
	T.turn(130)
	T.move(letterHeight)
	T.penUp()
}

function drawA2(letterHeight) {
	T.penUp()
	T.pointInDirection(90)
	T.move(letterHeight / 2)
	T.penDown()
	T.turn(-70)
	T.move(letterHeight)
	T.turn(140)
	T.move(letterHeight / 2)
	T.turn(110)
	T.move(letterHeight / 3)
	T.turn(180)
	T.move(letterHeight / 3)
	T.turn(70)
	T.move(letterHeight / 2)
	T.penUp()
}

function drawL2(letterHeight) {
	T.move(letterHeight / 2)
	T.penUp()
	T.goTo(0, 0)
	T.pointInDirection(0)
	T.penDown()
	T.move(letterHeight)
}

function drawZ(letterHeight) {
	T.penUp()
	T.move(letterHeight / 2)
	T.turn(180)
	T.penDown()
	T.move(letterHeight / 2)
	T.turn(120)
	T.move(letterHeight)
	T.turn(-120)
	T.move(letterHeight / 2)
}

function hemma(fontSize) {
	drawH(fontSize)
	drawE(fontSize)
	drawM(fontSize)
	drawM(fontSize)
	drawA2(fontSize)
}


function mamma(fontSize) {
	drawM(fontSize)
	drawA2(fontSize)
	drawM(fontSize)
	drawM(fontSize)
	drawA2(fontSize)
}

function bend() {
	T.penDown()
	let length = 40
	let turnTime = 0
	let turnAngle = 5
	while (turnTime < 20) {
		T.move(length)
		T.turn(turnAngle)
		turnTime++
		// turnAngle += 1
		length -= 10
	}
}

function isEven(n) {
	return n % 2 === 0;
}

function everyThird(n) {
	return n % 3 === 0;
}


function dashes(dashAmount) {
	let dashLength = 20
	// let dashSpacing = 10
	let dashCounter = 1
	T.penDown()
	for (let loopCounter = 0; loopCounter < dashAmount; loopCounter++) {
		console.log('inside loop loopCounter is: ' + loopCounter + ', dashCounter: ' + dashCounter);
		if (dashCounter == 1) {
			// T.turn(60)
			T.setPenColor('red')
			dashCounter++
		} else if (dashCounter == 2) {
			T.setPenColor('lightgreen')
			dashCounter++
		} else {
			T.setPenColor('blue')
			dashCounter = 1
		}
		T.move(dashLength)
		if (loopCounter % 4 == 3) {
			T.turn(60)
		}
	}
}

function circle(circleSize) {
	for (let circleTurns = 0; circleTurns < (circleSize * 4); circleTurns++) {

		T.move(circleSize)
		T.turn(360 / circleSize)
	}
}

function drawC(letterHeight) {
	T.pointInDirection(235)
	for (let index = 0; index < letterHeight; index++) {
		T.move(letterHeight)
		T.turn(180 / (letterHeight / 1.5))
	}
}

function semicircleClockwise(size) {
	for (let x = 0; x < 18 / 1.8; x++) {
		T.move(size / 6)
		T.turn(180 / 9)
	}
}
function semicircleCounterClockwise(size) {
	for (let x = 0; x < 18 / 1.8; x++) {
		T.move(size / 6)
		T.turn(-180 / 9)
	}
}

function quartercircleCounterClockwise(size) {
	for (let x = 0; x < 18 / 3.6; x++) {
		T.move(size / 9)
		T.turn(-180 / 9)
	}
}

function quartercircleClockwise(size) {
	for (let x = 0; x < 18 / 3.6; x++) {
		T.move(size / 6)
		T.turn(180 / 9)
	}
}

function drawS(letterHeight) {
	T.pointInDirection(120)
	semicircleCounterClockwise(letterHeight)
	semicircleClockwise(letterHeight)

}

function dots(size) {
	T.penUp()
	T.pointInDirection(0)
	T.move(size)
	T.turn(-90)
	T.move(size)
	T.penDown()
	circle(size / 5)
	T.penUp()
	T.pointInDirection(86)
	T.move(size * 3)
	T.penDown()
	circle(size / 5)
}

function drawÖ(letterHeight) {
	circle(letterHeight)
	dots(letterHeight)
}


function spiral() {
	let sideLength = 30
	let angle = 0
	for (let sideCounter = 0; sideCounter <= sideLength * 12; sideCounter++) {
		T.setPenColor('lightgreen')

		if (angle >= 90 && angle < 180) {
			T.setPenColor('blue')
		}
		else if (angle >= 180 && angle < 270) {
			T.setPenColor('red')
		}
		else if (angle >= 270 && angle <= 360) {
			T.setPenColor('purple')
		}

		T.move(sideLength)
		T.turn(20)
		sideLength -= 0.4

		angle += 20

		if (angle == 360) {
			angle = 0
		}
	}
}

function spiralSquare(sideLength) {

	for (let sideCounter = 0; sideCounter <= sideLength * 3; sideCounter++) {

		T.move(sideLength)
		T.turn(90)
		sideLength -= 3
	}
}

function triangle(sideLength) {
	for (let sideCounter = 0; sideCounter < 3; sideCounter++) {

		T.move(sideLength)
		T.turn(-120)

	}
}



function snowflake(length, points) {
	let bluntAngle = 360 / points
	let pointAngle = bluntAngle * 2

	for (let starCounter = 0; starCounter < points; starCounter++) {
		T.turn(180)
		for (let counter = 0; counter < points - 2; counter++) {
			T.turn(pointAngle)
			T.move(length)
			T.turn(-bluntAngle)
			T.move(length)
		}
	}
}

function drawR(letterHeight) {
	T.turn(-90)
	T.penDown()
	T.move(letterHeight)
	T.turn(90)
	semicircleClockwise(letterHeight / 2)
	T.turn(-140)
	T.move(letterHeight / 1.7)
	T.penUp()
	T.turn(-59)
	T.move(letterHeight / 2)
}

function drawI(letterHeight) {
	T.turn(-90)
	T.penDown()
	T.move(letterHeight)
	T.penUp()
	T.turn(180)
	T.move(letterHeight)
	T.turn(-90)
	T.move(letterHeight / 2)
}



function drawG(letterHeight) {
	T.move(letterHeight / 1.5)
	T.turn(-90)
	T.move(letterHeight / 1.7)
	T.turn(-90)
	T.move(letterHeight / 2)
	T.turn(180)
	T.penDown()
	T.move(letterHeight / 2)
	T.turn(90)
	quartercircleClockwise(letterHeight)
	semicircleClockwise(letterHeight)
	T.penUp()
	T.turn(60)
	T.move(letterHeight * 0.95)
	T.turn(-90)
	T.move(letterHeight / 1.2)
}

function drawP(letterHeight) {
	T.turn(-90)
	T.penDown()
	T.move(letterHeight)
	T.turn(90)
	semicircleClockwise(letterHeight / 2)
	T.penUp()
	T.turn(-90)
	T.move(letterHeight / 2)
	T.turn(-90)
	T.move(letterHeight / 2)
}

function drawRigg(letterHeight) {

	for (let letterCounter = 0; letterCounter < 4; letterCounter++) {
		if (letterCounter == 0) {
			drawR(letterHeight)
		}
		else if (letterCounter == 1) {
			drawI(letterHeight)
		}
		else {
			drawG(letterHeight)
		}
		T.turn(40)
		letterHeight -= 5
	}
}

function exercise1_3() {
	let stripe = 50
	let space = 20

	T.move(stripe)
	T.penUp()
	T.move(space)
	T.penDown()
	T.move(stripe)

	stripe = 20
	space = 10

	T.move(stripe)
	T.penUp()
	T.move(space)
	T.penDown()
	T.move(stripe)
	T.penUp()
	T.move(space)
	T.penDown()
	T.move(stripe)
}

// This is your first block (function)
// Replace the code inside to get started!
function start() {
	console.log('script.js | Drawing "AA"')

	T.setPenSize(3)
	T.setPenColor('lightgreen')
	T.pointInDirection(90)
	T.goTo(-150, 0)
	T.penDown()

	// dashes(10)
	// circle(20)
	// drawC(10)
	// drawS(10)
	// bend()
	// drawÖ(20)
	// spiral(100)
	// spiralSquare(100)
	// triangle(100)
	// snowflake(20, 6)
	// drawR(100)
	// drawI(100)
	// quartercircleCounterClockwise(30)
	// drawG(100)
	// drawG(100)
	// drawP(100)
	drawRigg(30)
}