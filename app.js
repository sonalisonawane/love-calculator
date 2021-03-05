let firstPartner = document.querySelector(".name-input1");
let secondPartner = document.querySelector(".name-input2");
let containerEl = document.querySelector(".container");
console.log(containerEl)
let btnEl = document.querySelector("#btn");
var percentage = 0;
var score = 0;


btnEl.addEventListener("click", function() {
    let userValueOne = firstPartner.value;
    let userValueTwo = secondPartner.value;
    var randomInt = Math.floor(Math.random() * 20);
    if (userValueOne.length === userValueTwo.length) {
        score += 5;
    }

    calculation = randomInt * score;
    console.log(randomInt, calculation)
    containerEl.innerHTML.appendChild = "Yours Love is :" + calculation;
})