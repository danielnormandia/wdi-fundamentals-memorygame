console.log("JS file is connected to HTML! Woo!")
//declaration of card names
var cardOne = "queen";	
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

//card value if statement
if (cardTwo === cardFour) {
	alert('Sorry, try again.');
}else if (cardTwo === cardThree) {
	alert('Sorry, try again.');
}else if (cardTwo === cardOne) {
	alert('You found a match!');
}else if (cardOne === cardThree) {
	alert('Sorry, try again.');
}else if (cardOne === cardFour) {
	alert('Sorry, try again.');
}else  {										//(cardThree === cardFour)
	alert('You found a match!');
}

var createCards = function(gameBoard) {
	
}


var gameBoard = document.getElementById('game-board');
	for (var i =0; i < 4; i++) {
		var newDiv = document.createElement('div').className = 'card';
	}	document.getElementsByClassName('game-board').appendChild(gameBoard);

	

	

