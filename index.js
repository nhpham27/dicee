function rollDice(){
    // return random dice number
    return Math.floor(Math.random()*6) + 1;
}

// get value of rolling dice for player 1 and player 2
var randomVariable1 = rollDice();
var randomVariable2 = rollDice();

// change the images of the dices to match the result of rolling dices
document.querySelector(".dice .img1").setAttribute("src", "images/dice" + randomVariable1 + ".png");
document.querySelector(".dice .img2").setAttribute("src", "images/dice" + randomVariable2 + ".png");

// change the text to reflect the result of the dice game
if (randomVariable1 > randomVariable2){
    document.querySelector("h1").textContent = "Player 1 Wins";
}
else if (randomVariable1 < randomVariable2){
    document.querySelector("h1").textContent = "Player 2 Wins";
}
else {
    document.querySelector("h1").textContent = "Draw";
}