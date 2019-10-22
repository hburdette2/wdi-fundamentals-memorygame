var cardOne = "queen";
var cardTwo = "king";
var cardThree = "queen";
var cardFour = "king";


const cards = ["queen","queen","king","king"];

const cardsInPlay = [];

function checkForMatch(){
	if (cardsInPlay.length === 2) {

	if (cardsInPlay[0] === cardsInPlay[1])
		alert("You've found a match!");
	else 
		alert("Sorry, try again");

}}
function flipCard(cardId) {

console.log("User flipped" + cards[cardId]);

cardsInPlay.push(cards[cardId]);

checkForMatch();

}

flipCard(0);
flipCard(2);