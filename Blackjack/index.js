

let firstCard;
let secondCard;
let cards;
let sum;
let hasBlackJack;
let isAlive;


//random integer function
function getRndInteger(min, max) {
      //return floored int
  var randomCard = Math.floor(Math.random() * (max - min) ) + min;
  return randomCard;
}

let messageEl = document.getElementById('message-el');
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");



function startGame(){
  firstCard = getRndInteger(2,12);
  secondCard = getRndInteger(2,12);
  cards = [firstCard,secondCard];
  sum = firstCard + secondCard;
  cardsEl.textContent = "Cards: ".concat(cards);
  sumEl.textContent = "Sum: ".concat(sum);
  displayMessage();
  isAlive = true;
  hasBlackJack = false;
}

//draws a new card and adds it to the cards array
function newCard(){
  if(isAlive && hasBlackJack === false)
  {
    nextCard = getRndInteger(2,12);
    sum += nextCard;

    cards.push(nextCard);
    cardsEl.textContent = "Cards: ".concat(cards);
    sumEl.textContent = "Sum: ".concat(sum);
    displayMessage();
  }

}

//Displaying the message to the user
function displayMessage(){
  if (sum <= 20) {
    message = "Do you want to draw a new card? 🙂"
} else if (sum === 21) {
    message = "Wohoo! You've got Blackjack! 🥳"
    hasBlackJack = true

} else {
    message = "You're out of the game! 😭"
    isAlive = false
  }
  messageEl.textContent = message;
}
