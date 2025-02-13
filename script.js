
console.log("Welcome :)")


for (let i=1; i<=1; i++) {
    // Intro text
    console.log("##################################")
    console.log("# Round " + i + "                        #")
    console.log("##################################")  

  //   Human choice
  let humanChoice=prompt("Please enter Rock, Paper or Scissors");
  console.log("You have chosen: "+humanChoice)

  // Computer choice
  let computerChoiceN=Math.floor(Math.random()*3);
  let computerChoice=["Rock", "Paper", "Scissors"][computerChoiceN];
  console.log("Computer has chosen: " + computerChoice);
}
