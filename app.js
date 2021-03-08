let firstPartner = document.querySelector(".name-input1");
let secondPartner = document.querySelector(".name-input2");
let containerEl = document.querySelector(".container");
let resultsDiv = document.querySelector(".results");
console.log(containerEl)
let btnEl = document.querySelector("#btn");
var percentage = 0;
var score = 0;


btnEl.addEventListener("click", function() {
    let userValueOne = toString(firstPartner.value);
    let userValueTwo = toString(secondPartner.value);
    let max = 10;
    let min = 1
    var randomInt = Math.floor(Math.random() * (max - min));

    if (userValueOne.length === userValueTwo.length) {
        score += 5;
    }

    calculation = randomInt * score;
    if (calculation > 100 || calculation == 0) {
        calculation = 100;
    }
    console.log(randomInt, calculation)
    resultsDiv.innerHTML = "Yours Love is : " + calculation + "%";
    aboutLove();
    clearResults();
})

function aboutLove() {
    alert("sonali")
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
        containerEl.removeChild(newBtn);
        calculation = 0;
    })
}