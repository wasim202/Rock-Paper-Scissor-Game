var game = function () {
  var wins = 0;
  var losses = 0;
  var ties = 0;

  var options = ["P", "R", "S"];
  var userChoice = prompt("Enter P, R, or S").toUpperCase();

  var computerChoice = options[Math.floor(options.length * Math.random())];

  alert("The computer choice is " + computerChoice);
  console.log({ computerChoice, userChoice });
  if (userChoice == computerChoice) {
    alert("IT'S A TIE!!");
    ties++;
  } else if (
    (userChoice == "P" && computerChoice == "R") ||
    (userChoice == "R" && computerChoice == "S") ||
    (userChoice == "S" && computerChoice == "P")
  ) {
    alert("YOU WIN!!");
    wins++;
  } else {
    alert("YOU LOST!!");
    losses++;
  }

  var status = alert(
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
};
game();
var again = confirm("do you want to try again?");

if (again) {
  game();
}
