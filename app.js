let firstPartner = document.querySelector(".name-input1");
let secondPartner = document.querySelector(".name-input2");
let containerEl = document.querySelector(".container");
let resultsDiv = document.querySelector(".results");
let loveDescription = document.querySelector(".aboutlove");
let btnEl = document.querySelector("#btn");
var percentage = 0;
var score = 0;


btnEl.addEventListener("click", function() {
    var userValueOne = toString(firstPartner.value);
    var userValueTwo = toString(secondPartner.value);
    let max = 10;
    let min = 1
    var randomInt = Math.floor(Math.random() * (max - min));

    if (userValueOne.length === userValueTwo.length) {
        score += 5;
    }

    calculation = randomInt * score;
    if (calculation > 100 || calculation < 20) {
        calculation = 100;
    }
    console.log(randomInt, calculation)
    resultsDiv.innerHTML = "Yours Love is : " + calculation + "%";
    aboutLove();
    clearResults();
})

function aboutLove() {
    // resultsDiv.innerHTML = "Yours Love is : " + calculation + "%";
    // var loveDescription = document.createElement("p");
    // containerEl.appendChild(loveDescription);
    if (calculation >= 90) {
        loveDescription.innerHTML = "You Are in extreme love with each other";
    } else if (calculation >= 80) {
        loveDescription.innerHTML = "your Love is growing day by day";
    } else if (calculation >= 50) {
        loveDescription.innerHTML = "Your Freindship is growing towards love";
    } else if (calculation > 20) {
        loveDescription.innerHTML = "You may need to spend some time with each other";
    } else {
        loveDescription.innerHTML = "You need more attention towards your relationship"
    }

}

function clearResults() {
    firstPartner.value = "";
    secondPartner.value = "";
    calculation = 0;
    let newBtn = document.createElement("button"); // for try Again 
    containerEl.appendChild(newBtn);
    newBtn.classList.add("tryAgainbtn"); //adding styles to button
    newBtn.innerHTML = "Try Again !"
    newBtn.addEventListener("click", function() { // <== After clicking on try Again button
        resultsDiv.innerHTML = "";
        loveDescription.innerHTML = "";
        containerEl.removeChild(newBtn);
        calculation = 0;
    })
}