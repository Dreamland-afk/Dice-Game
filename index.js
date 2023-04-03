var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomNumberName = "images/dice" + randomNumber1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomNumberName);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomNumberName2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomNumberName2);


if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML="🚩!! Player 1 wins !! 🚩";
}


if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩!! Player 2 wins !! 🚩";
}
if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "!! Draw !! Try again 🙂";
}