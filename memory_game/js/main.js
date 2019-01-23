console.log("Up and running!");

var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
];

var cardsInPlay = [];

function flipCard() {
	// "this" is referencing the element containing the event listener that was just activated
	var cardId = this.getAttribute('data-id');
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src', cards[cardId].cardImage);
	checkForMatch();
}

function checkForMatch() {
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match!");
		}
		else {
			alert("Sorry, try again.");
		}
	}
}

function createBoard() {
	console.log("Function called.");
	var gameBoard = document.getElementById('game-board');
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}

createBoard();

// // TEST CODE
// // Show queen of diamonds
// document.getElementById('game')[0].innerHTML = '<img src="images/queen-of-diamonds.png" alt="Queen of Diamonds">';

// // Variables for each card image
// var queenOfDiamonds = document.getElementById('game')[0].innerHTML;
// var queenOfHearts = document.getElementById('game')[1].innerHTML;
// var kingOfDiamonds = document.getElementById('game')[2].innerHTML;
// var kingOfHearts = document.getElementById('game')[3].innerHTML;

// // Event listeners
// element.addEventListener('click', functionToRun);

// // Function
// var flipCard()