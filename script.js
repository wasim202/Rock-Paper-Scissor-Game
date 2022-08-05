var game = function () {
  var wins = 0;
  var losses = 0;
  var ties = 0;

  //array options for the computer to pick from
  var options = ["P", "R", "S"];

  //ask users for their choice - touppercase to make comparison easier
  var userChoice = prompt("Enter P, R, or S").toUpperCase();

  if (!userChoice) {
    return;
  }

  //get random options for the computer choices
  var computerChoice = options[Math.floor(options.length * Math.random())];

  alert("The computer choice is " + computerChoice);

  //if choices are same - its tie
  if (userChoice === computerChoice) {
    alert("IT'S A TIE!!");
    ties++;
    //check win condition for the player
  } else if (
    (userChoice === "P" && computerChoice === "R") ||
    (userChoice === "R" && computerChoice === "S") ||
    (userChoice === "S" && computerChoice === "P")
  ) {
    alert("YOU WIN!!");
    wins++;
    //  If above conditions failed, assume player lost
  } else {
    alert("YOU LOST!!");
    losses++;
  }
  //print a status alert
  alert(
    "Status: " +
      "\n" +
      "WIN: " +
      wins +
      "\n" +
      "LOSSES " +
      losses +
      "\n" +
      "TIES " +
      ties
  );
  //ask the player to play again
  var again = confirm("do you want to try again?");
  // If user pressed OK, run the function again
  if (again) {
    game();
  }
};
// Run the game for the first time
game();
