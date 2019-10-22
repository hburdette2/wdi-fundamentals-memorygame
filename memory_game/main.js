var cardOne = "queen";
var cardTwo = "king";
var cardThree = "queen";
var cardFour = "king";


const cards = ["queen","queen","king","king"];

const cardsInPlay = [];

var cardOne = cards[0];

cardsInPlay.push(cardOne);
	console.log("User flipped queen");

var cardTwo = cards[2];

cardsInPlay.push(cardTwo);
	console.log("User flipped king");


if (cardsInPlay.length === 2) {
	alert("number of cards in play = 2");

	if (cardsInPlay[0] === cardsInPlay[1])
		alert("You've found a match!");
	else 
		alert("Sorry, try again");
}