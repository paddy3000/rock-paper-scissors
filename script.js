
console.log("Welcome :)")


for (let i=1; i<=1; i++) {
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
    let winner="It's a tie!";
  } else if (humanChoice==="Rock" && computerChoice=="Scissors" || humanChoice==="Paper" && computerChoice=="Rock" || humanChoice==="Scissors" && computerChoice=="Paper") {
    winner="You win :)"
  } else if (humanChoice==="Rock" && computerChoice=="Paper" || humanChoice==="Paper" && computerChoice=="Scissors" || humanChoice==="Scissors" && computerChoice=="Rock") {
    winner="Unlucky :("
  } 
  console.log(winner);

}
