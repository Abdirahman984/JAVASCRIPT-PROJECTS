let messageEle = document.getElementById("message-el");
let cardEle = document.getElementById("cards-el");
let sumEle =document.getElementById("sum-el");

let cards = []
let sum = 0;
let message = ""
let isAlive = false;
let hasBlackJack = false;

// FUNCATION THAT HELP ME TO GET RANDOM NUMBER FROM 1 TO 13 
function getRandomCard (){
 let  randomNumber =  Math.floor (Math.random() * 13 + 1)
 if(randomNumber === 1){
    return 11
 } else if (randomNumber > 11 ){
    return 10
 } else{
    return randomNumber
 }
}

// FUNCATION HELP ME TO START THE GAME GET RANDOM NUMBER 
function startGame(){
    isAlive = true
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
   cards = [firstCard, secondCard]
   sum = firstCard + secondCard
    renderGame();
}

// THIS FUNCATION HELP ME LOOPS, CODITIONAL THEN DISPLAY CARDS AND SUM 
function renderGame (){
    cardEle.textContent = "CARDS : "
    for (let i=0; i<cards.length; i++){
        cardEle.textContent += cards[i] + " ";
    }
    sumEle.textContent = " Total Cards : " + sum
    if(sum < 21){
        message = "DO YOU WANT PLAY THE GAME"
    } else if (sum === 21){
        message = "YOU HAVE GOT BLACKJACK !!!!!"
        hasBlackJack = true
    } else{
        message = "YOUR OUT OF THE GAME "
        isAlive = false
    }
    messageEle.textContent = message
    console.log (hasBlackJack);
 
}

// THIS FUNCATION HELP ME TO CREATING NEWCARD AND SUM IT ALL THE CARDS, STOP WHEN YOUR OUT OF THE GAME 
   function newCard (){
    if(isAlive === true && hasBlackJack === false){
    console.log("draw new cards")
    let card = getRandomCard();
    sum += card
    cards.push (card)
    renderGame();

    }

}



/*
// display the message output what you get when the condition is true
let messageEle = document.getElementById("message-el")
// display the sum of the cards 
let sumEle = document.getElementById("sum-el");
// this you will display the two cards 
let cardEle = document.getElementById("cards-el");
let playerCash = document.getElementById("player-el");


let player ={
    name: "per",
    cash: 145,
}
playerCash.textContent = player.name + " " + "$" + player.cash;

let sum = 0;
let cards = []
console.log(cards)
let hasBlackJack = false
let isAlive = false

let message = ""

function getRandomCard (){
  
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if(randomNumber === 1){
        return 11
    } else if (randomNumber > 11){
        return 10
    } else{
        return randomNumber
    }
}

function startGame (){
isAlive = true;
let firstCard = getRandomCard();
let secondCard = getRandomCard();
cards = [firstCard, secondCard ];
sum = firstCard + secondCard

    renderGame();
}

function renderGame (){
    for(let i=0; i<cards.length; i++){
        cardEle.textContent += cards[i] + " ";
    }
    sumEle.textContent = "SUM : " + sum
if(sum < 20){
    message = "Do you want to draw a new card? 🙂"
} else if (sum === 21){
    message = "Wohoo! You've got Blackjack! 🥳"
    hasBlackJack = true
} else{
    message = "You're out of the game! 😭"
    isAlive = false
}
messageEle.textContent = message
console.log(hasBlackJack);
}

function newCard (){
    if(isAlive === true && hasBlackJack === false){
        newCard
    console.log("Drawing a new card from the deck!")
    let card = getRandomCard()
    sum += card;
    cards.push(card);
    startGame();
    }
};


*/























































































































































































/*

// this is where you will display the message the data 
let messageEle = document.getElementById("message-el");

let sumEle = document.getElementById("sum-el");
let cardEle = document.getElementById("cards-el")
let firstCard = 10
let secondCard = 11
let cards =[ firstCard, secondCard]
let sumTotalCard = firstCard + secondCard 
let hasBlackJack = false
let isAlive = true

let message = "";

function startGame (){
    renderGame();
}

function renderGame(){
    cardEle.textContent = cards [firstCard  + secondCard];
    sumEle.textContent = "Gues:  " + sumTotalCard
if(sumTotalCard < 20){
    message = ("Do you want to draw a new card? 🙂")
} else if (sumTotalCard === 21) {
    message = ("Wohoo! You've got Blackjack! 🥳")
    hasBlackJack = true
} else{
message = ("You're out of the game! 😭")
isAlive = false

}
messageEle.textContent =message;
console.log(hasBlackJack)
}
// startGame();

function newCard (){
   console.log("Drawing a new card from the deck!") 
let card = 7;
sumTotalCard += card
renderGame();
}
*/


