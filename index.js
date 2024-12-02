//Get Buttons
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorBtn = document.getElementById("scissor");
const winResult= document.getElementById("result");

//Add Event listener
rockBtn.addEventListener('click',() => playgame(0));
paperBtn.addEventListener('click',() => playgame(1));
scissorBtn.addEventListener('click',() => playgame(2));




