
//Get input value
const userChoice = parseInt(document.getElementById("userChoiceNum").value);

//Take result in variable
const showResult = document.getElementById("result");

// Generate computer's random choice
const computerChoice = Math.floor(Math.random() * 3);

// Add event listener to the submit button
document.getElementById("submit").addEventListener("click", function() {

// Determine the result
    if (userChoice === computerChoice) {
        result = "It's a Tie!";
    } else if (
        (userChoice === 0 && computerChoice === 2) ||
        (userChoice === 1 && computerChoice === 0) ||
        (userChoice === 2 && computerChoice === 1)
    ) {
        result = "You Win!";
    } else {
        result = "You Lose!";
    }
// Display the result
    showResult.innerHTML = `<p >${result}</p>`;
});




