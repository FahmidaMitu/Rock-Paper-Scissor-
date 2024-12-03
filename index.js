
//Took array elements
const choices = ["Rock", "Paper", "Scissor"];

// Add event listener to the submit button
document.getElementById("submit").addEventListener("click", function() {

    //Get input value
    const userChoice = parseInt(document.getElementById("userChoiceNum").value);
    
    //validation for user input.
    if (userChoice < 0|| userChoice > 2|| isNaN(userChoice)){
        alert("Invalid Input! Please choose among 0,1 & 2.");
        return;
    }

    // Generate computer's random choice
    const computerChoice = Math.floor(Math.random() * 3);

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
    //Display user and computer choices.   
    const useChoiceText = choices[userChoice];
    const computerChoiceText = choices[computerChoice];

    //Take result in variable
    const showResult = document.getElementById("result");

    // Display the result
    showResult.innerHTML = `<p class="youChoose" >You choose ${useChoiceText}</p> 
    <p class="compChoose">Computer choose ${computerChoiceText}</p> 
    <p class="winner">${result}</p>`;

});




