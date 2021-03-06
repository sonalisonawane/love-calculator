let firstPartner = document.querySelector(".name-input1");
let secondPartner = document.querySelector(".name-input2");
let containerEl = document.querySelector(".container");
console.log(containerEl)
let btnEl = document.querySelector("#btn");
var percentage = 0;
var score = 0;


btnEl.addEventListener("click", function() {
    let userValueOne = toString(firstPartner.value);
    let userValueTwo = toString(secondPartner.value);
    var randomInt = Math.floor(Math.random() * 20);
    let vowels = ["a", "e", "i", "o", "u"]
    if (userValueOne.length === userValueTwo.length) {
        score += 5;
    }
    if (userValueOne.includes(vowels)) {
        score += 2;
        console.log(score)
    }
    calculation = randomInt * score;
    let newDiv = document.createElement("div"); //this div created when results have to show on screen
    containerEl.appendChild(newDiv);
    console.log(randomInt, calculation)
    newDiv.innerHTML = "Yours Love is :" + calculation;
})