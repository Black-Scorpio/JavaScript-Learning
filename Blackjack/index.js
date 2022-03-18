

let firstCard;
let secondCard;
let cards;
let sum;
let hasBlackJack;
let isAlive;
let playerName;
let chips;

//player object
let player = {
  name: "Scorpio",
  chips: 145

}

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name.concat(": $",player.chips)


//random integer function
function getRndInteger() {
      //return floored int
  var randomNumber = Math.floor(Math.random() * 13 ) + 1;
  if (randomNumber > 10) {
       return 10
   } else if (randomNumber === 1) {
       return 11
   } else {
       return randomNumber
   }
}

let messageEl = document.getElementById('message-el');
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");



function startGame(){
  firstCard = getRndInteger();
  secondCard = getRndInteger();
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
    nextCard = getRndInteger();
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
