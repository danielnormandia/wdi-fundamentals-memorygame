console.log("JS file is connected to HTML! Woo!")
// declaration of card names
// var cardOne = "queen";
// var cardTwo = "queen";
// var cardThree = "king";
// var cardFour = "king";

var cardList = ["queen","queen","king","king"];
var cardsInPlay = [];


var gameBoard = document.getElementById('game-board');
function makeBoard(){
	for (var i = 0; i < cardList.length; i++) {
			var createCard = document.createElement('div');
			createCard.className = "card";
			gameBoard.appendChild(createCard);
      createCard.setAttribute('data-card', cardList[i]);
      createCard.addEventListener('click', isTwoCards);

}
}


function isTwoCards() {
  cardsInPlay.push(this.getAttribute('data-card'));
    if (this.getAttribute('data-card') === "king") {
      this.innerHTML = '<img src="king.png" alt="King">';
    }else {
      this.innerHTML = '<img src="queen.png" alt="Queen">';
  }if (cardsInPlay.length === 2) {
  isMatch(cardsInPlay);}
}





function isMatch(cardsInPlay) {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        alert("They match! We did it guys");
    } else {
        alert("Sorry, try again.");
  }

 }



makeBoard();

isMatch();








