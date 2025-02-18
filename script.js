
console.log("Welcome :)")

const buttons=document.querySelectorAll("button");

const results=document.querySelector(".results");

let letsPlay=true;
let playerPoints=0;
let computerPoints=0;
let playerName=prompt("What is your name?");

// playRound function
playRound = function(playerChoice) {
  let computerChoiceN=Math.floor(Math.random()*3);
  let computerChoice=["rock", "paper", "scissors"][computerChoiceN];

  // Display computer choice on screen  
  const computerChoiceText=document.createElement("p");
  computerChoiceText.innerHTML="Paddy has chosen <b>" + computerChoice + "</b>";
  results.appendChild(computerChoiceText);

  // Decide the winner
  const resultsText=document.createElement("p");
  resultsText.style.fontWeight="bold";

  if (playerChoice===computerChoice) {
    resultsText.textContent="It's a tie";
    resultsText.style.color="black";
  } else if (playerChoice==="rock"     && computerChoice=="scissors" || 
             playerChoice==="paper"    && computerChoice=="rock" || 
             playerChoice==="scissors" && computerChoice=="paper") {
    resultsText.textContent="You won :)";
    resultsText.style.color="green";
    playerPoints++;
  } else if (playerChoice==="rock"     && computerChoice=="paper" || 
             playerChoice==="paper"    && computerChoice=="scissors" || 
             playerChoice==="scissors" && computerChoice=="rock") {
    resultsText.textContent="Unlucky :(";
    resultsText.style.color="red";
    computerPoints++;
  } 
  results.appendChild(resultsText); // Display winner on screen
}

// playAgain function
playAgain = function(button){
    const againButton=document.createElement("button");
    results.appendChild(againButton);
    againButton.textContent="Play again?";
    againButton.setAttribute("id", "again-button")

    againButton.addEventListener("click", function (e) {
        results.removeChild(results.firstChild);
        results.removeChild(results.firstChild);
        results.removeChild(results.firstChild);
        
    button.setAttribute("class", "button-unclicked");
    letsPlay=true;
    });
}

// runningTotal function
runningTotal = function() {
    const runningTotal=document.querySelector(".runningTotal");
    const runningTotalText=document.querySelector(".runningTotalText");
    runningTotalText.textContent=playerName + "'s score: " + playerPoints + ", Paddy's score: " + computerPoints;

    if (playerPoints>computerPoints) {
        runningTotalText.setAttribute("class", "runningTotalText winning");
    } else if (playerPoints<computerPoints) {
        runningTotalText.setAttribute("class", "runningTotalText losing");
    } else {
        runningTotalText.setAttribute("class", "runningTotalText drawing");
    }
}

// Put everything together
buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
        if (letsPlay===true) { 
          e.target.setAttribute("class", "button-clicked"); // Update button formatting
          playerChoice=e.target.getAttribute("id"); // Get playerChoice as variable from button
          letsPlay=false; // Stops players from playing until they press play again

          playRound(playerChoice);
          playAgain(e.target);
          runningTotal();
        }
    });
  });
