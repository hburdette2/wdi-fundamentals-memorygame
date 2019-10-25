var cardOne = "queen";
var cardTwo = "king";
var cardThree = "queen";
var cardFour = "king";


const cards = [
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

const cardsInPlay = [];

	createBoard();

	function createBoard(){
	
	var gameBoard = document.getElementById("game-board");
		


	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src','images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener("click", flipCard);
		gameBoard.appendChild(cardElement);
	}
	    	    	
}


function checkForMatch(){
	if (cardsInPlay.length === 2) {

	if (cardsInPlay[0] === cardsInPlay[1])
		alert("You've found a match!");
	else 
		alert("Sorry, try again");

}}
function flipCard() {
	var cardId = this.getAttribute('data-id');
	this.setAttribute('src', cards[cardId].cardImage);

console.log("User flipped" + cards[cardId].rank);
console.log("User flipped" + cards[cardId].suit);
console.log("User flipped" + cards[cardId].cardImage);


cardsInPlay.push(cards[cardId].rank);

checkForMatch();

}

