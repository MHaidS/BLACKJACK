// Create the player object. Give it two keys, name and chips, and set their values
let player = {
  name: "Reese",
  chips: 200,
};

let cards = [];
// array - ordered list of items
let sum = 0;
// let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = false;
let message = "";

let messageEl = document.getElementById("message-el");
// stores the message-el paragraph in a variable called messageEl

// stores the sum-el paragraph in a variable called sumEl
let sumEl = document.getElementById("sum-el");

//this also works:
// let sumEl = document.querySelector("#sum-el")

// Store the cards paragraph in a variable called cardsEl
let cardsEl = document.getElementById("cards-el");

// Grab ahold of the player-el paragraph and store it in a variable called playerEl
let playerEl = document.getElementById("player-el");
// Render the player's name and chips in playerEl
playerEl.textContent = player.name + ": $" + player.chips;

// A FUNCTION THAT RETURNS A RANDOM NUMBER BETWEEN 1 AND 13
function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  let sum = firstCard + secondCard;
  // Re-assign the cards and sum variables so that the game can start
  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards: ";
  // Create a for loop that renders out all the cards instead of just two
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }

  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  // Display the message in the messageEl using messageEl.textContent
  messageEl.textContent = message;
}

// A FUNCTION THAT ONLY ALLOWS THE PLAYER TO GET A NEW CARD IF STILL ALIVE AND DOES NOT HAVE BLACKJACK
function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    // Use the getRandomCard() to set the value of card
    let card = getRandomCard();
    sum += card;
    // Push the card to the cards array
    cards.push(card);
    renderGame();
  }
}
