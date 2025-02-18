
console.log("Welcome :)")

const buttons=document.querySelectorAll("button");

const results=document.querySelector(".results");

let letsPlay=true;
let humanPoints=0;
let computerPoints=0;

// playRound function
playRound = function(humanChoice) {
  let computerChoiceN=Math.floor(Math.random()*3);
  let computerChoice=["rock", "paper", "scissors"][computerChoiceN];

  // Display computer choice on screen  
  const computerChoiceText=document.createElement("p");
  computerChoiceText.innerHTML="Paddy has chosen <b>" + computerChoice + "</b>";
  results.appendChild(computerChoiceText);

  // Decide the winner
  const resultsText=document.createElement("p");

  if (humanChoice===computerChoice) {
    resultsText.textContent="It's a tie";
  } else if (humanChoice==="rock"     && computerChoice=="scissors" || 
             humanChoice==="paper"    && computerChoice=="rock" || 
             humanChoice==="scissors" && computerChoice=="paper") {
    resultsText.textContent="You won :)";
    humanPoints++;
  } else if (humanChoice==="rock"     && computerChoice=="paper" || 
             humanChoice==="paper"    && computerChoice=="scissors" || 
             humanChoice==="scissors" && computerChoice=="rock") {
    resultsText.textContent="Unlucky :(";
    computerPoints++;
  } 
  results.appendChild(resultsText); // Display winner on screen
}

// playAgain function
playAgain = function(button){
    const againButton=document.createElement("button");
    results.appendChild(againButton);
    againButton.textContent="Play again?";

    againButton.addEventListener("click", function (e) {
        results.removeChild(results.firstChild);
        results.removeChild(results.firstChild);
        results.removeChild(results.firstChild);
        
    button.setAttribute("class", "button-unclicked");
    letsPlay=true;
    });
}

buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
        if (letsPlay===true) { 
          e.target.setAttribute("class", "button-clicked"); // Update button formatting
          humanChoice=e.target.getAttribute("id"); // Get humanChoice as variable from button
          letsPlay=false;
          
          playRound(humanChoice); // run playRound function
          playAgain(e.target);
        }
    });
  });

// let numberOfRounds=prompt("How many rounds would you like to play?");

// for (let i=1; i<=numberOfRounds; i++) {
//     // Intro text
//     console.log("##################################")
//     console.log("# Round " + i + "                        #")
//     console.log("##################################")  

//   //   Human choice
//   let humanChoice=prompt("Please enter Rock, Paper or Scissors", "");
//   console.log("You have chosen: "+humanChoice)

//   // Computer choice
//   let computerChoiceN=Math.floor(Math.random()*3);
//   let computerChoice=["Rock", "Paper", "Scissors"][computerChoiceN];
//   console.log("Computer has chosen: " + computerChoice);

//   // Decide the winner
//   if (humanChoice===computerChoice) {
//     console.log("It's a tie!");
//   } else if (humanChoice==="Rock" && computerChoice=="Scissors" || humanChoice==="Paper" && computerChoice=="Rock" || humanChoice==="Scissors" && computerChoice=="Paper") {
//     console.log("You win :)");
//     humanPoints++;
//   } else if (humanChoice==="Rock" && computerChoice=="Paper" || humanChoice==="Paper" && computerChoice=="Scissors" || humanChoice==="Scissors" && computerChoice=="Rock") {
//     console.log("Unlucky :(");
//     computerPoints++;
//   } 
//   console.log("");

//   // Display running total
//   console.log("Running total:");
//   console.log("Human points: " + humanPoints + ", Computer points: " + computerPoints);
//   console.log("");
 
// }
