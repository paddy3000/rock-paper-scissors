
console.log("Welcome :)")

let humanPoints=0;
let computerPoints=0;

let numberOfRounds=prompt("How many rounds would you like to play?");

for (let i=1; i<=numberOfRounds; i++) {
    // Intro text
    console.log("##################################")
    console.log("# Round " + i + "                        #")
    console.log("##################################")  

  //   Human choice
  let humanChoice=prompt("Please enter Rock, Paper or Scissors", "");
  console.log("You have chosen: "+humanChoice)

  // Computer choice
  let computerChoiceN=Math.floor(Math.random()*3);
  let computerChoice=["Rock", "Paper", "Scissors"][computerChoiceN];
  console.log("Computer has chosen: " + computerChoice);

  // Decide the winner
  if (humanChoice===computerChoice) {
    console.log("It's a tie!");
  } else if (humanChoice==="Rock" && computerChoice=="Scissors" || humanChoice==="Paper" && computerChoice=="Rock" || humanChoice==="Scissors" && computerChoice=="Paper") {
    console.log("You win :)");
    humanPoints++;
  } else if (humanChoice==="Rock" && computerChoice=="Paper" || humanChoice==="Paper" && computerChoice=="Scissors" || humanChoice==="Scissors" && computerChoice=="Rock") {
    console.log("Unlucky :(");
    computerPoints++;
  } 
  console.log("");

  // Display running total
  console.log("Running total:");
  console.log("Human points: " + humanPoints + ", Computer points: " + computerPoints);
  console.log("");
 
}
